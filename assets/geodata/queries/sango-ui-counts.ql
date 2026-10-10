[out:json][timeout:60];
way["highway"](7.417,3.872,7.455,3.922)->.roads;
.roads out count;
way["building"](7.417,3.872,7.455,3.922)->.buildings;
.buildings out count;
way["waterway"](7.417,3.872,7.455,3.922)->.waterways;
.waterways out count;
nwr["amenity"](7.417,3.872,7.455,3.922)->.amenities;
.amenities out count;
