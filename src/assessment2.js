class Car {
    constructor(fuelLevel = 100) {
        this.speed = 0;
        this.fuelLevel = fuelLevel;
        this.engineOn = false;
    }

    accelerate() {
        if ( this.fuelLevel >= 1 ) {
            this.speed++;
            this.fuelLevel--;
        }
    }

    brake() {
        if ( this.speed > 0 ) {
            this.speed--;
        }
    }

    turnCarOff() {
        this.engineOn = false;
    }

    turnCarOn () {
        this.engineOn = true;
    }

    refillFuel() {
        this.fuelLevel = 100;
    }
}

const myCar = new Car(60);

myCar.refillFuel();
myCar.turnCarOn();
myCar.accelerate();
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.brake();
myCar.brake();
myCar.turnCarOff();