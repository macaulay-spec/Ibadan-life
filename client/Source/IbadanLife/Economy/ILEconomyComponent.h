// IBADAN LIFE — Economy component: the player's interface to the backend ledger.
#pragma once

#include "CoreMinimal.h"
#include "Components/ActorComponent.h"
#include "ILEconomyComponent.generated.h"

DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnBalanceReceived, int64, TotalKobo);
DECLARE_DYNAMIC_MULTICAST_DELEGATE_OneParam(FOnEconomyError, FString, Message);

/**
 * UILEconomyComponent — the client's interface to the SERVER-AUTHORITATIVE
 * economy. It never decides money; it calls the backend ledger (the single
 * source of truth) and mirrors the result. All money is integer KOBO.
 *
 * Endpoints (see backend/src/api/routes.ts):
 *   GET  /api/economy/balance
 *   GET  /api/economy/ledger
 *   POST /api/economy/transfer   { toPlayerId, amount(Naira) }
 *   POST /api/economy/deposit    { amount }
 *   POST /api/economy/withdraw   { amount }
 */
UCLASS(ClassGroup = (IbadanLife), meta = (BlueprintSpawnableComponent))
class IBADANLIFE_API UILEconomyComponent : public UActorComponent
{
	GENERATED_BODY()

public:
	UILEconomyComponent();

	// The player's JWT (from login). Required for all economy calls.
	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Economy")
	void SetAuthToken(const FString& Token);

	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Economy")
	void SetBackendBaseUrl(const FString& Url);

	// Fetch the authoritative balance from the ledger.
	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Economy")
	void FetchBalance();

	// Send Naira to another player (server applies the 2.5% municipal tax).
	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Economy")
	void Transfer(int64 ToPlayerId, double AmountNaira);

	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Economy")
	void Deposit(double AmountNaira);

	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Economy")
	void Withdraw(double AmountNaira);

	UPROPERTY(BlueprintAssignable, Category = "IbadanLife|Economy")
	FOnBalanceReceived OnBalanceReceived;

	UPROPERTY(BlueprintAssignable, Category = "IbadanLife|Economy")
	FOnEconomyError OnEconomyError;

private:
	void SendRequest(const FString& Verb, const FString& Path, const FString& JsonBody,
	                 TFunction<void(int32 StatusCode, const FString& Body)> OnDone);

	FString AuthToken;
	FString BackendBaseUrl = TEXT("http://localhost:3000");
};
