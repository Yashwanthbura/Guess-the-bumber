let button = document.getElementById("button");
let output = document.getElementById("output");
let input= document.getElementById("input");
var attempts = 0;




let number = [Math.floor(Math.random()*100)+1]


   button.addEventListener('click',function(){

    let input = document.getElementById("input").value; 
       
       
       

       if(input < number){
        output.innerHTML = "Too low! Try again!"
        attempts++;
        document.getElementById("attempt").innerHTML="Attempts used : "+attempts;
       };
       if(input>number){
        output.innerHTML = "Too high! Try again!"
        attempts++;
        document.getElementById("attempt").innerHTML="Attempts used : "+attempts;
       }
          
       
       if(input <1){
        alert("Enter a number greater then 1")
        attempts--;
        document.getElementById("attempt").innerHTML="Attempts used : "+attempts;

        input.value = ' ';
        output.innerHTML=' ';
       }
       if(input >100){
        alert("Enter a number between 1-100")
        attempts--;
        document.getElementById("attempt").innerHTML="Attempts used : "+attempts;
        input.value = ' ';
        output.innerHTML=' ';
       }
       if(isNaN(input)){
        alert("Enter a valid number")
        attempts--;
        document.getElementById("attempt").innerHTML="Attempts used : "+attempts;
        input.value = '';
        output.innerHTML = ' ';
       }
      

       if(input == number){
        output.innerHTML=`Congrats you guessed the correct answer ${number}`
        input.disabled = true;
        button.disabled = true;
        document.getElementById("Game").classList.remove("new");
        }

       else if (attempts === 10) {
        output.innerHTML = 'Game over! The number was ' + number + '.';
        disableInput();
        document.getElementById("Game").classList.remove("new");
        
      } 
});


function newGame() {
  document.getElementById("Game").classList.add("new");
  
    attempts = 0;
    document.getElementById("attempt").innerHTML =  "Attempts used:"+attempts;

    input.value = '';
    output.innerHTML='';
    input.disabled = false;
    button.disabled = false;
    number = Math.floor(Math.random() * 100) + 1;

    if(input == number){
      output.innerHTML=`Congrats you guessed the correct answer ${number}`
      input.disabled = true;
      button.disabled = true;

      }
    if (attempts === 10) {
      document.getElementById("output").innerHTML = 'Game over! The number was ' + number + '.';
          disableInput();
        } 
  }


function disableInput() {
      input.disabled = true;
      button.disabled = true;
    }




