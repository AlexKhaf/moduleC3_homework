// Задание 5
//
// Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
};
    plugIn()  {
        console.log(this.name + " is plugged!");
        this.isPlugged = true;
    };
    unplug() {
        console.log(this.name + " is unplugged!");
        this.isPlugged = false;
    };
    consumption() {
        let consumption = this.isPlugged ? this.power : 0;
        console.log(this.name + " consumption " + consumption);
        return consumption;
    };
};

class Lamp extends ElectricalAppliance {
    constructor (name, brand, power, bulbType) {
        super(name, power);
        this.brand = brand;
        this.bulbType = bulbType;
        this.isPlugged = true;
        this.basicFeatures = function basicFeatures() {
            console.log(`Наменование лампы: ${this.name}, марка: ${this.brand}, мощность: ${this.power}, ${this.isPlugged ? "подключена" : "отключена"}`)
        }
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isPlugged = false;
        this.basicFeatures = function basicFeatures() {
            console.log(`Наменование  ЭВМ: ${this.name}, марка: ${this.brand}, мощность: ${this.power}, ${this.isPlugged ? "подключена" : "отключена"}`)
        }
    }
}

const tableLamp = new Lamp("Table lamp", "Xiaomi", 5, "LED");
const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

console.log(`---------------------------------`);
console.log(`Основные характеристики электроприборов:`);
homePC.basicFeatures()
tableLamp.basicFeatures()

console.log(`---------------------------------`);
console.log(`TOTAL consumption:`, + (homePC.consumption() + tableLamp.consumption()) + ` Wt`)
console.log(`---------------------------------`);

tableLamp.unplug();
homePC.plugIn();

console.log(`---------------------------------`);
console.log(`Основные характеристики электроприборов:`);
homePC.basicFeatures()
tableLamp.basicFeatures()

console.log(`---------------------------------`);
console.log(`TOTAL consumption:`, + (homePC.consumption() + tableLamp.consumption()) + ` Wt`)
console.log(`---------------------------------`);

console.log(homePC);
console.log(tableLamp);







