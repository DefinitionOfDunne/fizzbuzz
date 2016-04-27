$(document).ready(function() {
    
    var inputNumber = parseInt(prompt("Enter a number between 1 and 100."));
    if (isNaN(inputNumber)) {
        prompt("Please use numerical digits.");
    }
    else if (inputNumber % 1 !== 0) {
        prompt("Enter a whole number.");
    }
    else {
        fizzbuzz(inputNumber);
    }
function fizzbuzz() {
    for (var n = 1; n <= inputNumber; n++) {
    
        if (n % 5 === 0 && n % 3 === 0) {
            $("ul").append('FizzBuzz');
        }
        else if (n % 5 === 0) {
            $("ul").append('Buzz');
        }
        else if (n % 3 === 0) {
            $("ul").append('Fizz');
        }
        else {
            $("ul").append(n);
        }
        $("ul").append("<br>");
    }

};

});

