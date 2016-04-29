/*jshint
  expr: true
*/

/*
 When I click on a button of class fb-generate
 I want to take the context of an input field of class fb-input
 and pass it into a fizzbuzz function 
 */

$(document).ready(function () {

    // var inputNumber = Math.floor(prompt("Enter a number between 1 and 100."));

    $('.fb-button').click(function () {
        var inputNumber = $('.fb-input').val();

        if (isNaN(inputNumber)) {
            $('.fb-message').text("Please enter an integer.");
        } else {
            $('.fb-input').empty();
            fizzbuzz(inputNumber);
        }
    
    $(".call-out").append(inputNumber + "?!?");
    
    setTimeout(function() {
        $(".call-out").empty();
        }, 2500);
    });



    function fizzbuzz(inputNumber) {
        $('ul li').remove();
        

        for (var n = 1; n <= inputNumber; n++) {
            n % 5 !== 0 && n % 3 !== 0 ? append(n) : false;
            n % 5 === 0 ? append('Buzz') : false;
            n % 3 === 0 ? append('Thizz') : false;
            n % 3 === 0 && n % 5 === 0 ? append('ThizzBuzz') : false;

            // ternary operator
            /*
                if(x > 5) {
                console.log('Its greater');
                } else {
                console.log('Its less');
                }
                
                this same statement ternary way
                x > 5 ? console.log('Its greater') : console.log('Its less');
             */

        }
    }

    function append(item) {
        $(".fb-list").append('<li>' + item + '</li>');
    }
});