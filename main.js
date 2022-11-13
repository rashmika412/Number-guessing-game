let btn = document.getElementById("btn");
let text = document.getElementById("text");
let number = [Math.floor(Math.random() * 100)];
let score = 20;
let Highscore = 0;
btn.addEventListener("click", function () {
  let input = Number(document.getElementById("userinput").value);
  console.log(input, typeof input);
  // document.querySelector('#userinput').value = 20;
  if (input > number) {
    if (score > 1) {
      document.querySelector('#text').innerHTML = `📈You guess too high!`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("#text").textContent = `👎you lost!!`;
      document.querySelector(".score").textContent = 0;
    };
  } else if (input < number) {
    if(score>1) {
      document.querySelector('#text').innerHTML = `📉You guess too low!.`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector("#text").textContent = `👎you lost!!`;
      document.querySelector(".score").textContent = 0; 
    };
    
  }
  if (input == number) {
    document.querySelector('#text').innerHTML = `🏆You guessed the right number no is ${number}.`;

    document.querySelector('#container').style.backgroundColor ="green";
    if(score > Highscore) {
      Highscore = score;
      document.querySelector('.highscore').textContent = Highscore;
    }

  } else if (!input) {
    document.querySelector("#text").textContent = "⛔ No guess!";
  }
});
 document.querySelector('#restart').addEventListener('click', function() {
    score = 20;
     number = [Math.floor(Math.random() * 100)];

    document.querySelector("#text").textContent = "start guessing!!";
    document.querySelector(".score").textContent =score;

     document.querySelector("#userinput").value = " ";
     document.querySelector('#container').style.backgroundColor = 'rgb(121, 133, 8)';

 });
 
