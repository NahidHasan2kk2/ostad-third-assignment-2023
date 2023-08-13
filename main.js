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

// Example usage
const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};
2.function printObjectProperties(obj) {
    if (Object.keys(obj).length === 0) {
        console.log("Object is empty");
    } else {
        for (let prop in obj) {
            console.log(`${prop}: ${obj[prop]}`);
        }
    }
}

// Example usage
const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};

printObjectProperties(myObject);

3.function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let maxNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        }
    }

    return maxNumber;
}

// Example usage
const numbers1 = [10, 20, 5, 30, 25];
const maxNumber = findMaxNumber(numbers1);
console.log(`The maximum number is: ${maxNumber}`);
