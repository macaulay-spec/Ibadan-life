// IBADAN LIFE — Player state (replicated, server-authoritative).
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/PlayerState.h"
#include "ILPlayerState.generated.h"

/**
 * AILPlayerState — the server-owned, replicated snapshot of who a player is.
 * Money here is a MIRROR; the backend ledger is the single source of truth.
 * All money is integer KOBO (1 Naira = 100 kobo).
 */
UCLASS()
class IBADANLIFE_API AILPlayerState : public APlayerState
{
	GENERATED_BODY()

public:
	AILPlayerState();

	// The name the city knows you by (visible to other players).
	UPROPERTY(Replicated, BlueprintReadOnly, Category = "IbadanLife")
	FString DisplayName;

	// "nepo" | "lapo" — starting background (see CHARACTER_CREATION.md).
	UPROPERTY(Replicated, BlueprintReadOnly, Category = "IbadanLife")
	FString Background;

	// Economy mirror (kobo). Authoritative value lives in the backend ledger.
	UPROPERTY(Replicated, BlueprintReadOnly, Category = "Economy")
	int64 CashKobo = 0;

	UPROPERTY(Replicated, BlueprintReadOnly, Category = "Economy")
	int64 BankKobo = 0;

	// District instance the player currently inhabits.
	UPROPERTY(Replicated, BlueprintReadOnly, Category = "IbadanLife")
	FString CurrentDistrict;

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;
};
