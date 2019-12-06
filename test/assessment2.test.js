describe('Car', () => {
    it('defaults fuelLevel to 100', () => {
        const car = new Car();
        expect(car.fuelLevel).toBe(100);
    })

    it('defaults speed to 0', () => {
        const car = new Car();
        expect(car.speed).toBe(0);
    })

    it('defaults engineOn', () => {
        const car = new Car();
        expect(car.engineOn).toBeFalse();
    })

    it('increases speed by 1 when accelerate is called', () => {
        const car = new Car();
        car.accelerate();
        expect(car.speed).toBe(1);
    })

    it('decreases fuelLevel by 1 when accelerate is called', () => {
        const car = new Car();
        car.accelerate();
        expect(car.fuelLevel).toBe(99);
    })

    it('accepts an argument for fuelLevel', () => {
        const car = new Car(20);
        expect(car.fuelLevel).toBe(20);
    })

    it('does not increase speed when fuelLevel is less than 1 and accelerate is called', () => {
        const car = new Car(0);
        car.accelerate();
        expect(car.speed).toBe(0);
    })

    it('sets engineOn to true when turnCarOn is called', () => {
        const car = new Car(0);
        car.turnCarOn();
        expect(car.engineOn).toBeTrue();
    })

    it('sets engineOn to false when turnCarOff is called', () => {
        const car = new Car(0);
        car.turnCarOn();
        car.turnCarOff();
        expect(car.engineOn).toBeFalse();
    })

    it('sets engineOn to false when turnCarOff is called', () => {
        const car = new Car(0);
        car.refillFuel();
        expect(car.fuelLevel).toBe(100);
    })

    it('myCar has a final state of false for engineOn', () => {
        expect(myCar.engineOn).toBeFalse();
    })

    it('myCar has a final state of 0 for speed', () => {
        expect(myCar.speed).toBe(0);
    })
})
