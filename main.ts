function oddOrEven(number: number){
    if (number % 2){
        return console.log(`${number} is Odd!`)
    }

    else {
        return console.log( `${number} is Even!`)
    }
}

oddOrEven(9);

function poundToKilo(pounds: number){
    return `${pounds / 2.2046}kg`;
}

console.log(poundToKilo(923));

function inchToCent(inches: number){
    return `${inches / .39370}cm`;
}

console.log(inchToCent(100));

function fahrenheitToCelsius(degrees: number){
    // return ` (${degrees - 32}) / 1.80000) ˚C `;
    return `${(degrees - 32) / 1.8000} ˚C`
}

console.log(fahrenheitToCelsius(97))

function feetToMeter(feet: number){
    return `${feet * 0.3048}m`
}

console.log(feetToMeter(232))


// If a number is divisible by three, say "Fizz!" instead
// If a number is divisible by five, say "Buzz!" instead
// If a number is divisible by three and by five, say "Fizz-Buzz!"
// Otherwise, just say the number as you would normally
function fizzBuzz(number: number){
    if(number % 3 === 0 && number % 5 === 0){
        return "Fizz-Buzz!";
    }

    else if(number % 5 === 0){
        return "Buzz!";
    }

    else if(number % 3 === 0){
        return "Fizz!";
    }

    else{
        return "A regular number!"
    }
}


console.log(fizzBuzz(60));