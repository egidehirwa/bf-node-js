// Fill in the blanks to complete the exercises.

const lastName = 'Egide';
const height = 164;
const isStudent = true;
console.log(lastName, height, isStudent);

let currentCity = 'Mons';
currentCity = 'Brussels';
console.log(currentCity);

const calculateArea = (length, width) => [100, 200];
console.log(calculateArea(length, width));

const greetUser = () => {Bonjour};
greetUser();

const car = {
    make: 'Opel',
    model: 'Riviera',
    year: 2017
};
console.log(car.make, car.model, car.year);

car.describe = function () {
    console.log(`This car is a ${car.make} ${car.model} ${car.year}.`);
};
car.describe();

const fruits = ['banana', 'apple', 'orange'];
fruits.push('Pineaple');
console.log(fruits);

// Exercise 8: Array Methods
fruits.forEach((fruit) => console.log(`l would like to eat ${fruit}`));
const upperFruits = fruits.map((fruit) => {
    return fruit.toUpperCase()
});
console.log(upperFruits);

const moreFruits = [... 'Ananas', 'Pears'];
console.log(moreFruits);

const sumNumbers = (...args) => args.reduce((sum, num) => sum + num, 0);
console.log(sumNumbers(6, 4, 45, 23, 10));

const { make, model } = car;
console.log(make, model);

const [firstFruit, secondFruit] = fruits;
console.log(firstFruit, secondFruit);

setTimeout(() => {
    console.log(`Wait for 2 seconds before showing the response.`);
}, 2000);

setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);


