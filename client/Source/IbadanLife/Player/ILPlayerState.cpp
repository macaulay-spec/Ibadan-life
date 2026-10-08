// IBADAN LIFE — Player state (replicated, server-authoritative).
#include "ILPlayerState.h"
#include "Net/UnrealNetwork.h"

AILPlayerState::AILPlayerState()
{
	// Replication: server -> clients. Money is a mirror of the backend ledger.
	bReplicates = true;
	NetUpdateFrequency = 30.0f;
}

void AILPlayerState::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);

	DOREPLIFETIME(AILPlayerState, DisplayName);
	DOREPLIFETIME(AILPlayerState, Background);
	DOREPLIFETIME(AILPlayerState, CashKobo);
	DOREPLIFETIME(AILPlayerState, BankKobo);
	DOREPLIFETIME(AILPlayerState, CurrentDistrict);
}
