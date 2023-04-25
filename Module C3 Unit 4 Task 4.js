// Задание 4
//
// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
// Реализуйте его на прототипах.
// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
};

ElectricalAppliance.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalAppliance.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

ElectricalAppliance.prototype.consumption = function() {
    consumption = this.isPlugged ? this.power : 0;
    console.log(this.name + " consumption " + consumption);
    return consumption;
};

function Lamp(name, brand, power, bulbType) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = bulbType;
    this.isPlugged = true;
    this.basicFeatures = function basicFeatures() {
        console.log(`Наменование лампы: ${this.name}, марка: ${this.brand}, мощность: ${this.power}, ${this.isPlugged ? "подключена" : "отключена"}`)
    }
}

Lamp.prototype = new ElectricalAppliance();


function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
    this.basicFeatures = function basicFeatures() {
        console.log(`Наменование  ЭВМ: ${this.name}, марка: ${this.brand}, мощность: ${this.power}, ${this.isPlugged ? "подключена" : "отключена"}`)
    }

}

Computer.prototype = new ElectricalAppliance();


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


