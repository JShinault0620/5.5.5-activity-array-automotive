//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.passengers = 0
        this.maximumPassengers = 6
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }

    loadPassengers(number) {
        if ((this.passengers + number) < this.maximumPassengers) {
            this.passengers += number
        }
    }

    unloadPassengers(number) {
        if ((this.passengers - number) > 0) {
            this.passengers -= number
        }
    }

    start() {
        if (fuel > 0) {
            console.log('The car has started.')
        }
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
            this.scheduleService = true
        }
    }
}