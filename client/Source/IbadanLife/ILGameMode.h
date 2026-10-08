// IBADAN LIFE — Authoritative game mode.
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/GameModeBase.h"
#include "ILGameMode.generated.h"

/**
 * AILGameMode — the authoritative game mode.
 * Runs on the dedicated server. Owns spawning players into their district
 * instance and enforcing server authority. The client never decides game truth.
 */
UCLASS()
class IBADANLIFE_API AILGameMode : public AGameModeBase
{
	GENERATED_BODY()

public:
	AILGameMode();

	// Server: a real player connected — place them in the world.
	virtual void PostLogin(APlayerController* NewPlayer) override;

	// Server: a player left — persist their state (handled by the backend/ledger).
	virtual void Logout(AController* Exiting) override;
};
