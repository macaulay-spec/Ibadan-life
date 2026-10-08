// IBADAN LIFE — module build rules.
using UnrealBuildTool;

public class IbadanLife : ModuleRules
{
	public IbadanLife(ReadOnlyTargetRules Target) : base(Target)
	{
		PCHUsage = PCHUsageMode.UseExplicitOrSharedPCHs;

		PublicDependencyModuleNames.AddRange(new string[]
		{
			"Core",
			"CoreUObject",
			"Engine",
			"InputCore",
			"EnhancedInput",
			"UMG",
			"Slate",
			"SlateCore",
			"HTTP",
			"Json",
			"JsonUtilities",
			"NetCore",
			"OnlineSubsystem",
			"OnlineSubsystemUtils",
			"ChaosVehicles",
			"DeveloperSettings",
		});

		PrivateDependencyModuleNames.AddRange(new string[]
		{
			"GameplayAbilities",
			"GameplayTags",
			"GameplayTasks",
		});

		// Server-authoritative: the simulation runs on the dedicated server.
		// We build for client (Android) and server (Linux).
		if (Target.bBuildEditor)
		{
			PrivateDependencyModuleNames.Add("UnrealEd");
		}
	}
}
