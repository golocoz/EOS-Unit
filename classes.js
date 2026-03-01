class saveData {
    handlingTypes = [];
    propertyTypes = [];
    ws; // get name
    enhancements = [];
    meleeAugs = [];
    rangedAugs = [];
    defensiveAugs = [];
    espAugs = [];
    utilAugs = [];

    constructor(handlingTypeList, propertyTypeList){
        // for loop to populate handlingType and propertyType
        for (i = 0; i < handlingTypeList; i++){
            var handlingType = new weaponProperty(name_of_handlingType);
            this.handlingTypes.push(handlingType);
        }

        for (i = 0; i < propertyTypeList; i++){
            var propertyType = new weaponProperty(name_of_propertyType);
            this.propertyTypes.push(propertyType);
        }

        // for loop to populate enhancements and augs
        for (i = 0; i < enhancementsList; i++){
            var enhancement = new weaponProperty(name_of_thing);
            enhancement.push(enhancement);
        }
    }
}

class weaponProperty{
    name;
    costSelect;

    constructor(name){
        this.name = name;
    }
}