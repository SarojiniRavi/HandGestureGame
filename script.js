var stones = document.querySelector(".stone");
var papers = document.querySelector(".paper");
var scissors = document.querySelector(".scissor");
var s1 = document.querySelector(".s1");
var s2 = document.querySelector(".s2");
var modals = document.querySelector(".modal");
var player1 = document.querySelector(".player1");
var player2 = document.querySelector(".player2");
var buttons = document.querySelectorAll("button");
var img1 = document.querySelector("#player1Img");
var img2 = document.querySelector("#player2Img");
var btnClose = document.querySelector(".btn-close");
var scores = document.querySelector(".score");
var column1 = document.querySelector(".columns1");
var column2 = document.querySelector(".columns2");
var imgs = ["assets/rock.png", "assets/paper.png", "assets/scissor.png"];
var user = buttons;
var computer;
var score1 = 0;
var score2 = 0;
s1.innerText = score1;
s2.innerText = score2;

stones.addEventListener("click", function () {
  var sto = document.getElementById("stone").value;
  img1.src = imgs[0];
  computer = createRandomNumber();
  game(sto, computer);
});

papers.addEventListener("click", function () {
  var pap = document.getElementById("paper").value;
  img1.src = imgs[1];
  computer = createRandomNumber();
  game(pap, computer);
});

scissors.addEventListener("click", function () {
  var sci = document.getElementById("scissors").value;
  img1.src = imgs[2];
  computer = createRandomNumber();
  game(sci, computer);
});

function createRandomNumber() {
  var random = Math.floor(Math.random() * imgs.length);
  img2.src = imgs[random];
  return imgs[random];
}

function game(user, computer) {
  if (
    (user == "stone" && computer == imgs[2]) ||
    (user == "paper" && computer == imgs[0]) ||
    (user == "scissors" && computer == imgs[1])
  ) {
    score1++;
    s1.textContent = score1;
    s2.style.fontSize = "25px";
  } else if (
    (computer == imgs[1] && user == "stone") ||
    (computer == imgs[2] && user == "paper") ||
    (computer == imgs[0] && user == "scissors")
  ) {
    score2++;
    s2.textContent = score2;
    s2.style.fontSize = "25px";
  } else if (
    (user == "stone" && computer == imgs[0]) ||
    (user == "paper" && computer == imgs[1]) ||
    (user == "scissors" && computer == imgs[2])
  ) {
    stones.disabled = true;
    papers.disabled = true;
    scissors.disabled = true;
    score();
    modals.style.display = "block";
  }
}
function score() {
  if (score1 > score2) {
    document.querySelector(
      "h2"
    ).innerHTML = `Player Got High Score:  ${score1} `;
    scores.innerHTML = `Player Won the Game <br> Score :  ${score1} `;
    document.querySelector("h2").style.border = "5px dashed purple";
    document.querySelector("h2").style.width = "75%";
    document.querySelector("h2").style.padding = "2%";
    document.querySelector("h2").style.fontWeight = "bold";
  } else if (score1 < score2) {
    document.querySelector(
      "h2"
    ).innerHTML = `Player 2 Got High Score:  ${score2} `;
    scores.innerHTML = `Computer Won the Game <br> Score :  ${score2} `;
    document.querySelector("h2").style.border = "5px dashed purple";
    document.querySelector("h2").style.width = "75%";
    document.querySelector("h2").style.padding = "2%";
    document.querySelector("h2").style.fontWeight = "bold";
  } else if (score1 == score2) {
    document.querySelector(
      "h2"
    ).innerHTML = `Both Player and Computer are TIE Score is ${score1} `;
    scores.innerHTML = `Both Player and Computer are TIE <br> Score :  ${
      score1 || score2
    } `;
    document.querySelector("h2").style.border = "5px dashed purple";
    document.querySelector("h2").style.width = "75%";
    document.querySelector("h2").style.padding = "2%";
    document.querySelector("h2").style.fontWeight = "bold";
  }
}

btnClose.addEventListener("click", function () {
  modals.style.display = "none";
  location.reload();
});
