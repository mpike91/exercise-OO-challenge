// Part One
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return "Beep";
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
}

// Part Two
class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

// Part Three
class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make,model,year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

// Part Four
class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(veh){
        if (this.vehicles.length >= this.capacity) return "Sorry, we're full.";
        if (!(veh instanceof Vehicle)) return "Only vehicles are allowed in here!";
        this.vehicles.push(veh);
        return "Vehicle added!";
    }
}