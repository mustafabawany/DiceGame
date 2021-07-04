
// Generating Random Number 1

var randomNumber1 = Math.floor(Math.random() * 6);
randomNumber1 = randomNumber1 + 1;

var imageNumber1 = "dice" + randomNumber1 + ".png";
var randomImage1 = "images/" + imageNumber1;

document.querySelector(".img1").setAttribute("src",randomImage1);

// Generating Random Number 2

var randomNumber2 = Math.floor(Math.random() * 6);
randomNumber2 = randomNumber2 + 1;

var imageNumber2 = "dice" + randomNumber2 + ".png";
var randomImage2 = "images/" + imageNumber2;

document.querySelector(".img2").setAttribute("src",randomImage2);

if (randomNumber1 > randomNumber2){                                         // Player 1 wins
    document.querySelector("h1").innerHTML="Player 1 Wins🚩";
}
else if (randomNumber1 < randomNumber2){                                    // Player 2 Wins
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else {                                                                      // Draw
    document.querySelector("h1").innnerHTML="Draw🚩";
}