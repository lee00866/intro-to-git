// 1. Declare a variable name and assign it as your name. Print the variable to the console.
const username = 'eunji';

console.log(username);

// 2. Add a new fruit to the fruits array using the push method.

const fruitList = ['apple', 'kiwi'];

fruitList.push("banana");

console.log(fruitList);

// 3. Write a function getDaysUntilAdeshBirthday that calculates and returns the number of days remaining until his birthday. 
//Print the result to the console. Adesh's birthday is on March 25. 

function getDaysUntilAdeshBirthday(){
    const today = new Date();
    const adeshBirthday = new Date('2024-03-25');

    const dDay = Math.round((adeshBirthday-today)/(1000*60*60*24));

    return dDay;
}

console.log(getDaysUntilAdeshBirthday());

