class Pet {
    public name: string;

    constructor(theName: string) { 
    	this.name = theName; 
    }
    
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Cat extends Pet {

	public speak() {
		return console.log(`${this.name} says "Meow!"`);
	}

}

class Dog extends Pet {
	public speak() {
		return console.log(`${this.name} says "Woof! Woof!"`);
	}
}

let myCat = new Cat('Linux');
myCat.speak();
myCat.move(10);

let myDog = new Dog("Colby");
myDog.speak();
myDog.move(20);




