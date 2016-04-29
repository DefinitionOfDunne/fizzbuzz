$(document).ready(function () {

    $('.fb-button').click(function () {
        var inputNumber = parseInt($('.fb-input').val());

        if (isNaN(inputNumber) || inputNumber > 100) {

            $('.fb-message').text("Come on you beezy, put an integer between 1 & 100!!");

        } else {

            $('.fb-input').empty();
            $('.fb-message').empty();

            fizzbuzz(inputNumber);

            $(".call-out").empty();
            $(".call-out").append(inputNumber + "?!?");
        }
    });

    function fizzbuzz(inputNumber) {

        $('ul li').remove();

        for (var n = 1; n < inputNumber; n++) {

            n % 5 !== 0 && n % 3 !== 0 ? append(n) : false;
            n % 15 === 0 ? append('ThizzBuzz') : false;
            n % 3 === 0 ? append('Thizz') : false;
            n % 5 === 0 ? append('Buzz') : false;

        }
    }

    function append(item) {
        $(".fb-list").append('<li>' + item + '</li>');
    }

});
