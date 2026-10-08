// IBADAN LIFE — Economy component: the player's interface to the backend ledger.
#include "ILEconomyComponent.h"
#include "HttpModule.h"
#include "Interfaces/IHttpRequest.h"
#include "Interfaces/IHttpResponse.h"
#include "Dom/JsonObject.h"
#include "Serialization/JsonReader.h"
#include "Serialization/JsonSerializer.h"

UILEconomyComponent::UILEconomyComponent()
{
	PrimaryComponentTick.bCanEverTick = false;
}

void UILEconomyComponent::SetAuthToken(const FString& Token) { AuthToken = Token; }
void UILEconomyComponent::SetBackendBaseUrl(const FString& Url) { BackendBaseUrl = Url; }

void UILEconomyComponent::SendRequest(const FString& Verb, const FString& Path, const FString& JsonBody,
                                      TFunction<void(int32, const FString&)> OnDone)
{
	TSharedRef<IHttpRequest, ESPMode::ThreadSafe> Req = FHttpModule::Get().CreateRequest();
	Req->SetURL(BackendBaseUrl / Path);
	Req->SetVerb(Verb);
	Req->SetHeader(TEXT("Content-Type"), TEXT("application/json"));
	if (!AuthToken.IsEmpty())
	{
		Req->SetHeader(TEXT("Authorization"), FString::Printf(TEXT("Bearer %s"), *AuthToken));
	}
	if (!JsonBody.IsEmpty())
	{
		Req->SetContentAsString(JsonBody);
	}
	Req->OnProcessRequestComplete().BindLambda(
		[OnDone](FHttpRequestPtr, FHttpResponsePtr Res, bool bOk)
		{
			const int32 Code = Res.IsValid() ? Res->GetResponseCode() : 0;
			const FString Body = Res.IsValid() ? Res->GetContentAsString() : TEXT("");
			OnDone(Code, Body);
		});
	Req->ProcessRequest();
}

void UILEconomyComponent::FetchBalance()
{
	SendRequest(TEXT("GET"), TEXT("/api/economy/balance"), TEXT(""),
		[this](int32 Code, const FString& Body)
		{
			if (Code != 200) { OnEconomyError.Broadcast(Body); return; }
			TSharedPtr<FJsonObject> Json;
			if (TJsonReaderFactory<>::Create(Body, Json) && Json.IsValid())
			{
				const int64 Total = FMath::RoundToInt(Json->GetNumberField(TEXT("total")) * 100.0);
				OnBalanceReceived.Broadcast(Total);
			}
		});
}

void UILEconomyComponent::Transfer(int64 ToPlayerId, double AmountNaira)
{
	const FString Body = FString::Printf(TEXT("{\"toPlayerId\":%lld,\"amount\":%f}"), (long long)ToPlayerId, AmountNaira);
	SendRequest(TEXT("POST"), TEXT("/api/economy/transfer"), Body,
		[this](int32 Code, const FString& BodyStr)
		{
			if (Code != 200) { OnEconomyError.Broadcast(BodyStr); return; }
			FetchBalance(); // refresh the mirror after a successful transfer
		});
}

void UILEconomyComponent::Deposit(double AmountNaira)
{
	const FString Body = FString::Printf(TEXT("{\"amount\":%f}"), AmountNaira);
	SendRequest(TEXT("POST"), TEXT("/api/economy/deposit"), Body,
		[this](int32 Code, const FString& BodyStr)
		{
			if (Code != 200) { OnEconomyError.Broadcast(BodyStr); return; }
			FetchBalance();
		});
}

void UILEconomyComponent::Withdraw(double AmountNaira)
{
	const FString Body = FString::Printf(TEXT("{\"amount\":%f}"), AmountNaira);
	SendRequest(TEXT("POST"), TEXT("/api/economy/withdraw"), Body,
		[this](int32 Code, const FString& BodyStr)
		{
			if (Code != 200) { OnEconomyError.Broadcast(BodyStr); return; }
			FetchBalance();
		});
}
