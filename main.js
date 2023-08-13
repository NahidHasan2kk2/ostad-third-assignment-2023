1.
function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        for (let prop in obj) {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

// Test cases
const person = {
    name: "John",
    age: 30,
    profession: "Engineer"
};

const emptyObj = {};

printObjectProperties(person);
printObjectProperties(emptyObj);

2. function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// Test cases
const numbers1 = [10, 20, 5, 30, 25];
console.log(findMaxNumber(numbers1));

const numbers2 = [5, 15, 7];
console.log(findMaxNumber(numbers2)); // Output: 15

const emptyArray = [];
console.log(findMaxNumber(emptyArray)); // Output: null


3.function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// Test case
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6]


4.

const calculateSquare = (number) => number * number;

// Example usage
console.log(calculateSquare(5)); // Output: 25
console.log(calculateSquare(8)); // Output: 64


5.

const doubleNumbers = (numbers) => numbers.map(number => number * 2);

// Example usage
const numbers = [1, 2, 3, 4, 5];
console.log(doubleNumbers(numbers)); // Output: [2, 4, 6, 8, 10]
6.

class MathUtility {
    static multiply(a, b) {
        return a * b;
    }
}

// Example usage
console.log(MathUtility.multiply(5, 3)); // Output: 15
console.log(MathUtility.multiply(2, 8)); // Output: 16



7. class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`${this.name} says ${this.sound}`);
    }
}

class Dog extends Animal {
    fetch() {
        console.log("Fetching the ball!");
    }
}

// Example usage
const animal = new Animal("Lion", "Roar");
animal.makeSound();

const dog = new Dog("Rover", "Woof");
dog.makeSound();
dog.fetch();


8.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    introduce() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old student majoring in ${this.major}.`);
    }
}


const person1 = new Person("John", 30);
person1.introduce();

const student1 = new Student("Alice", 20, "Computer Science");
student1.introduce();


