document.getElementById('fizzbuzzOutput');
for(var n = 1; n <=100; n++){

    if(n % 15 === 0){
        fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "FizzBuzz";
        fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "<br/>";
    
    }else if(n % 3 === 0){
        fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "Fizz";
        fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "<br/>";
    
    }else if(n % 5 === 0){
        fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "Buzz";
       fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "<br/>";
    
    }else{
       fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + n;
       fizzbuzzOutput.innerHTML = fizzbuzzOutput.innerHTML   + "<br/>";
    }

}