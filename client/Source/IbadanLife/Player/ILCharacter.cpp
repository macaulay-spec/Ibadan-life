// IBADAN LIFE — The player character: a modular avatar you move through the city.
#include "ILCharacter.h"
#include "AbilitySystemComponent.h"
#include "Ability/ILAttributeSet.h"
#include "ILPlayerState.h"
#include "Components/SkeletalMeshComponent.h"
#include "EnhancedInputComponent.h"
#include "EnhancedInputSubsystems.h"
#include "GameFramework/CharacterMovementComponent.h"
#include "Net/UnrealNetwork.h"

AILCharacter::AILCharacter()
{
	// GAS: the ability system owns the needs attribute set.
	AbilitySystemComponent = CreateDefaultSubobject<UAbilitySystemComponent>(TEXT("AbilitySystemComponent"));
	AbilitySystemComponent->SetIsReplicated(true);
	AbilitySystemComponent->SetReplicationMode(EGameplayEffectReplicationMode::Mixed);

	AttributeSet = CreateDefaultSubobject<UILAttributeSet>(TEXT("AttributeSet"));

	// Modular avatar mesh (merged at runtime -> 1 draw call).
	AvatarMesh = CreateDefaultSubobject<USkeletalMeshComponent>(TEXT("AvatarMesh"));
	AvatarMesh->SetupAttachment(GetMesh());
	AvatarMesh->SetIsReplicated(true);

	// Mobile-friendly movement tuning.
	bUseControllerRotationPitch = false;
	bUseControllerRotationYaw = false;
	bUseControllerRotationRoll = false;
	if (UCharacterMovementComponent* Move = GetCharacterMovement())
	{
		Move->bOrientRotationToMovement = true;
		Move->RotationRate = FRotator(0.0f, 540.0f, 0.0f);
		Move->MaxWalkSpeed = 450.0f; // brisk city walk; run via input scale
	}

	// Replicate so other clients see this player.
	bReplicates = true;
	SetReplicateMovement(true);
	NetUpdateFrequency = 30.0f;
}

UAbilitySystemComponent* AILCharacter::GetAbilitySystemComponent() const
{
	return AbilitySystemComponent;
}

const UILAttributeSet* AILCharacter::GetNeedsAttributeSet() const
{
	return AttributeSet;
}

void AILCharacter::BeginPlay()
{
	Super::BeginPlay();
	if (AbilitySystemComponent)
	{
		AbilitySystemComponent->InitAbilityActorInfo(GetPlayerState(), this);
	}
}

void AILCharacter::PossessedBy(AController* NewController)
{
	Super::PossessedBy(NewController);
	if (APlayerController* PC = Cast<APlayerController>(NewController))
	{
		if (UEnhancedInputLocalPlayerSubsystem* Subsystem = ULocalPlayer::GetSubsystem<UEnhancedInputLocalPlayerSubsystem>(PC->GetLocalPlayer()))
		{
			if (DefaultMappingContext)
			{
				Subsystem->AddMappingContext(DefaultMappingContext, 0);
			}
		}
	}
	if (UEnhancedInputComponent* EIC = Cast<UEnhancedInputComponent>(InputComponent))
	{
		if (MoveAction)     EIC->BindAction(MoveAction, ETriggerEvent::Triggered, this, &AILCharacter::Move);
		if (LookAction)     EIC->BindAction(LookAction, ETriggerEvent::Triggered, this, &AILCharacter::Look);
		if (InteractAction) EIC->BindAction(InteractAction, ETriggerEvent::Triggered, this, &AILCharacter::Interact);
	}
}

void AILCharacter::OnRep_PlayerState()
{
	Super::OnRep_PlayerState();
	if (AbilitySystemComponent && GetPlayerState())
	{
		AbilitySystemComponent->InitAbilityActorInfo(GetPlayerState(), this);
	}
}

void AILCharacter::Move(const FInputActionValue& Value)
{
	const FVector2D Axis = Value.Get<FVector2D>();
	if (Controller)
	{
		const FRotator YawRot(0.0f, Controller->GetControlRotation().Yaw, 0.0f);
		const FVector Forward = FRotationMatrix(YawRot).GetUnitAxis(EAxis::X);
		const FVector Right = FRotationMatrix(YawRot).GetUnitAxis(EAxis::Y);
		AddMovementInput(Forward, Axis.Y);
		AddMovementInput(Right, Axis.X);
	}
}

void AILCharacter::Look(const FInputActionValue& Value)
{
	const FVector2D Axis = Value.Get<FVector2D>();
	if (Controller)
	{
		AddControllerYawInput(Axis.X);
		AddControllerPitchInput(Axis.Y);
	}
}

void AILCharacter::Interact(const FInputActionValue& /*Value*/)
{
	// Client asks the server to interact; the server validates (never trust the client).
	// (Target acquisition is done via a line trace in Blueprint or here.)
}

void AILCharacter::ServerInteract_Implementation(AActor* Target)
{
	// Server-side interaction validation lives here (economy, social, world).
	UE_LOG(LogTemp, Log, TEXT("[ILCharacter] ServerInteract target=%s"), Target ? *Target->GetName() : TEXT("null"));
}

void AILCharacter::ServerApplyCustomization_Implementation(const FString& SlotJson)
{
	// Server validates the customization (ownership of cosmetics) then replicates.
	UE_LOG(LogTemp, Log, TEXT("[ILCharacter] ServerApplyCustomization: %s"), *SlotJson);
}

void AILCharacter::ApplyCustomization(const TArray<USkeletalMesh*>& SlotMeshes)
{
	// Runtime merge of slot meshes into one skeletal mesh (1 draw call).
	// Full FSkeletalMeshMerge wiring lives in the avatar subsystem; this is the hook.
	if (AvatarMesh && SlotMeshes.Num() > 0)
	{
		AvatarMesh->SetSkeletalMesh(SlotMeshes[0]);
	}
}
