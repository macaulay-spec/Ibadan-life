// IBADAN LIFE — Authoritative game mode.
#include "ILGameMode.h"
#include "ILPlayerState.h"
#include "Player/ILCharacter.h"
#include "Engine/World.h"
#include "GameFramework/PlayerController.h"
#include "Kismet/GameplayStatics.h"

AILGameMode::AILGameMode()
{
	// Defaults are set in DefaultGame.ini (GameModeClass, PlayerStateClass,
	// DefaultPawnClass, HUDClass). We keep them explicit here for clarity.
	PlayerStateClass = AILPlayerState::StaticClass();
	DefaultPawnClass = AILCharacter::StaticClass();

	// A dedicated, authoritative server. No peer-to-peer.
	bUseSeamlessTravel = false;
}

void AILGameMode::PostLogin(APlayerController* NewPlayer)
{
	Super::PostLogin(NewPlayer);

	if (NewPlayer)
	{
		UE_LOG(LogTemp, Log, TEXT("[ILGameMode] Player connected: %s"), *NewPlayer->GetName());
		// The player's district instance placement is handled by matchmaking +
		// the backend session service (see WORLD_INSTANCING_STRATEGY.md).
	}
}

void AILGameMode::Logout(AController* Exiting)
{
	UE_LOG(LogTemp, Log, TEXT("[ILGameMode] Player leaving: %s"), Exiting ? *Exiting->GetName() : TEXT("?"));
	// Persistence is flushed through the backend ledger (SAVE_AND_PERSISTENCE.md).
	Super::Logout(Exiting);
}
