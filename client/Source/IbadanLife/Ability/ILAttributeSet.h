// IBADAN LIFE — GAS attribute set: the six needs + supporting attributes.
#pragma once

#include "CoreMinimal.h"
#include "AttributeSet.h"
#include "AbilitySystemComponent.h"
#include "ILAttributeSet.generated.h"

// Helper macros for standard gameplay-attribute accessors.
#define ATTRIBUTE_ACCESSORS(ClassName, PropertyName) \
	GAMEPLAYATTRIBUTE_PROPERTY_GETTER(ClassName, PropertyName) \
	GAMEPLAYATTRIBUTE_VALUE_GETTER(PropertyName) \
	GAMEPLAYATTRIBUTE_VALUE_SETTER(PropertyName) \
	GAMEPLAYATTRIBUTE_VALUE_INITTER(PropertyName)

/**
 * UILAttributeSet — the six life needs (see NEEDS_SYSTEM.md) plus supporting
 * attributes. Each need runs 0..100. The server owns these; they replicate to
 * the owning client. GAS drives all value changes (GameplayEffects).
 */
UCLASS()
class IBADANLIFE_API UILAttributeSet : public UAttributeSet
{
	GENERATED_BODY()

public:
	UILAttributeSet();

	// --- The six needs (0..100) ---
	UPROPERTY(BlueprintReadOnly, Category = "Needs", ReplicatedUsing = OnRep_Hunger)
	FGameplayAttributeData Hunger;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Hunger);

	UPROPERTY(BlueprintReadOnly, Category = "Needs", ReplicatedUsing = OnRep_Energy)
	FGameplayAttributeData Energy;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Energy);

	UPROPERTY(BlueprintReadOnly, Category = "Needs", ReplicatedUsing = OnRep_Hygiene)
	FGameplayAttributeData Hygiene;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Hygiene);

	UPROPERTY(BlueprintReadOnly, Category = "Needs", ReplicatedUsing = OnRep_Bladder)
	FGameplayAttributeData Bladder;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Bladder);

	UPROPERTY(BlueprintReadOnly, Category = "Needs", ReplicatedUsing = OnRep_Fun)
	FGameplayAttributeData Fun;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Fun);

	UPROPERTY(BlueprintReadOnly, Category = "Needs", ReplicatedUsing = OnRep_Social)
	FGameplayAttributeData Social;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Social);

	// --- Supporting attributes ---
	UPROPERTY(BlueprintReadOnly, Category = "Vitals", ReplicatedUsing = OnRep_Health)
	FGameplayAttributeData Health;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Health);

	UPROPERTY(BlueprintReadOnly, Category = "Vitals", ReplicatedUsing = OnRep_Stamina)
	FGameplayAttributeData Stamina;
	ATTRIBUTE_ACCESSORS(UILAttributeSet, Stamina);

	// Clamp every need to [0, 100] before it changes.
	virtual void PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue) override;

	virtual void GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const override;

protected:
	// Clamp helper.
	static void ClampAttribute(const FGameplayAttribute& Attribute, float& NewValue);

	UFUNCTION() void OnRep_Hunger(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Energy(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Hygiene(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Bladder(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Fun(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Social(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Health(const FGameplayAttributeData& OldValue) const;
	UFUNCTION() void OnRep_Stamina(const FGameplayAttributeData& OldValue) const;
};
