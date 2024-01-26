//Pirveli davaleba

function numberValue(a, b) {
    if (a === b) {
        return "equals";
    } else {
        return "not equals";
    }
}

//This will return in console equals;
let firstResult = numberValue(5, 5);
console.log(firstResult); 

//This will return in console not equals;
let secondResult = numberValue(10, 5);
console.log(secondResult); 

//Meore davaleba

function numberValue(a, b) {
    if (a == b) {
        return "equals";
    } else {
        return "not equals";
    }
}
//This will return in console equals;
console.log(numberValue(1, 1));

//This will return in console not equals;
console.log(numberValue(1, 2));

//Mesame davaleba

//Farenheit formula: (32°F − 32) * 5/9 = 0°C

function convertTemperature(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    
    return celsius;
}


let farenheitTemperature = 100;
let celsiusTemperature = convertTemperature(farenheitTemperature);
console.log(`Celsius: ${celsiusTemperature.toFixed(2)}°C`);


//Meotxe davaleba

function checkNumber(value) {
    if (typeof value !== 'number') {
      return false;
    }
    return true;
  }
  
  console.log(checkNumber(10));      // Output: true
  console.log(checkNumber("skillwill")); // Output: false
  console.log(checkNumber(true));     // Output: false
  console.log(checkNumber(null));     // Output: false  
  

  //Mexute davaleba

  function calculate(a, b, op) {
    switch (op) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':

        if (b === 0) {
          return "Cannot divide";
        }
        return a / b;
      default:
        return "Error";
    }
  }
  
  console.log(calculate(1, 2, '+'));  // 3
  console.log(calculate(3, 2, '-'));  // 1
  console.log(calculate(4, 5, '*'));  // 20
  console.log(calculate(6, 3, '/')); // 2
  console.log(calculate(1, 0, '/'));  // "Cannot divide"
  console.log(calculate(1, 2, '%'));  // "Error"
  

  // Meeqvse davaleba

  // Check if a and b are numbers
  function mainOperation(a, b, operation) {
    if (typeof a !== 'number' || typeof b !== 'number' || !checkOperation(operation)) {
        return false;
    }

    // Operation
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return a / b;
        default:
            return false; 
    }
}

// Function for check operation
function checkOperation(operation) {
    return ['add', 'subtract', 'multiply', 'divide'].includes(operation);
}
 
// Examples for some variations

console.log(mainOperation(1, 2, 'add')); 
console.log(mainOperation('a', 1, 'add')); 
console.log(mainOperation(1, 2, 'power')); 
