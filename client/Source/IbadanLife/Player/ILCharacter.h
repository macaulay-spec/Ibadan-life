// IBADAN LIFE — The player character: a modular avatar you move through the city.
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Character.h"
#include "AbilitySystemInterface.h"
#include "ILCharacter.generated.h"

class UAbilitySystemComponent;
class UILAttributeSet;
class UInputMappingContext;
class UInputAction;

/**
 * AILCharacter — the player's body in the world.
 *
 * - Modular avatar: a single shared skeletal base rig; slot meshes (head, torso,
 *   legs, shoes) are merged at runtime via FSkeletalMeshMerge -> 1 draw call.
 *   LOD'd for mobile (see CHARACTER_ART_BIBLE.md).
 * - Movement: third-person, touch-friendly (Enhanced Input).
 * - Life: owns a GameplayAbilitySystem + the six-need attribute set.
 *
 * The server is authoritative; the client predicts locally and reconciles.
 */
UCLASS(config = Game)
class IBADANLIFE_API AILCharacter : public ACharacter, public IAbilitySystemInterface
{
	GENERATED_BODY()

public:
	AILCharacter();

	// --- IAbilitySystemInterface ---
	virtual UAbilitySystemComponent* GetAbilitySystemComponent() const override;

	// The six-need attribute set (server-owned, replicated).
	UFUNCTION(BlueprintPure, Category = "IbadanLife|Needs")
	const UILAttributeSet* GetNeedsAttributeSet() const;

	// --- Modular avatar (see CHARACTER_ART_BIBLE.md) ---
	// Apply a customization (slot meshes + morph targets) and merge into one mesh.
	UFUNCTION(Server, Reliable, Category = "IbadanLife|Avatar")
	void ServerApplyCustomization(const FString& SlotJson);

	UFUNCTION(BlueprintCallable, Category = "IbadanLife|Avatar")
	void ApplyCustomization(const TArray<class USkeletalMesh*>& SlotMeshes);

	// --- Enhanced Input (touch-friendly movement) ---
	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Input")
	UInputMappingContext* DefaultMappingContext;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Input")
	UInputAction* MoveAction;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Input")
	UInputAction* LookAction;

	UPROPERTY(EditAnywhere, BlueprintReadOnly, Category = "Input")
	UInputAction* InteractAction;

protected:
	virtual void BeginPlay() override;
	virtual void PossessedBy(AController* NewController) override;
	virtual void OnRep_PlayerState() override;

	// GAS: the ability system + the needs attribute set.
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "IbadanLife|GAS")
	TObjectPtr<UAbilitySystemComponent> AbilitySystemComponent;

	UPROPERTY()
	TObjectPtr<const UILAttributeSet> AttributeSet;

	// The merged modular avatar mesh (1 draw call per character).
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category = "IbadanLife|Avatar")
	TObjectPtr<class USkeletalMeshComponent> AvatarMesh;

	// Input handlers
	void Move(const struct FInputActionValue& Value);
	void Look(const struct FInputActionValue& Value);
	void Interact(const struct FInputActionValue& Value);

	// Server: interaction is validated server-side (never client-trusted).
	UFUNCTION(Server, Reliable, Category = "IbadanLife|Interaction")
	void ServerInteract(class AActor* Target);
};
