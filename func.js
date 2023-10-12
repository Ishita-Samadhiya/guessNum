// generate a random number from 1-25
let rand = Math.floor(Math.random() * 25 +1); 

//store the submit button and text in variables for later
let submit = document.getElementById("submit");
let correct = document.getElementById("correct");

function check(){
    /*
        gets the input and check it against rand to display results
    */
    let input = document.getElementById("input");
    let inp = input.value; //get input value
    if(inp < rand){ //change text and its color if lower
        correct.innerText = "Guess Higher!";
        correct.style.color = 'red';
    } else if (inp > rand) { //change text and its color if higher
        correct.innerText = "Guess Lower!";
        correct.style.color = 'red';
    } else { //change text and its color if correct guess
        correct.innerText = "Correct!!!!!";
        correct.style.color = 'green';
    }
}

//call check when submit clicked
submit.addEventListener("click", check); 