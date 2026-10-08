// IBADAN LIFE — GAS attribute set: the six needs + supporting attributes.
#include "ILAttributeSet.h"
#include "Net/UnrealNetwork.h"
#include "GameplayEffectExtension.h"

UILAttributeSet::UILAttributeSet()
{
	// Everyone starts well-fed, rested, clean, and alive. Needs decay over time.
	InitHunger(100.0f);
	InitEnergy(100.0f);
	InitHygiene(100.0f);
	InitBladder(100.0f);
	InitFun(100.0f);
	InitSocial(100.0f);
	InitHealth(100.0f);
	InitStamina(100.0f);
}

void UILAttributeSet::ClampAttribute(const FGameplayAttribute& Attribute, float& NewValue)
{
	// All needs and vitals live in [0, 100].
	NewValue = FMath::Clamp(NewValue, 0.0f, 100.0f);
}

void UILAttributeSet::PreAttributeChange(const FGameplayAttribute& Attribute, float& NewValue)
{
	Super::PreAttributeChange(Attribute, NewValue);
	ClampAttribute(Attribute, NewValue);
}

void UILAttributeSet::GetLifetimeReplicatedProps(TArray<FLifetimeProperty>& OutLifetimeProps) const
{
	Super::GetLifetimeReplicatedProps(OutLifetimeProps);

	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Hunger, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Energy, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Hygiene, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Bladder, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Fun, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Social, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Health, COND_None, REPNOTIFY_Always);
	DOREPLIFETIME_CONDITION_NOTIFY(UILAttributeSet, Stamina, COND_None, REPNOTIFY_Always);
}

// OnRep hooks — UI binds here to refresh need bars. Kept lightweight for the scaffold.
void UILAttributeSet::OnRep_Hunger(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Energy(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Hygiene(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Bladder(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Fun(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Social(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Health(const FGameplayAttributeData& OldValue) const {}
void UILAttributeSet::OnRep_Stamina(const FGameplayAttributeData& OldValue) const {}
