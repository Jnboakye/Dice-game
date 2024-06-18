let randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

let randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png - images/dice6.png

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1; //1-6s

let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute ("src", randomImageSource2);



//If player wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "First player wins";
}
else if(randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Second player wins";
}
 else{
  document.querySelector("h1").innerHTML = "Draw";
 }
