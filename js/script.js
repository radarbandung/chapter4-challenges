const result_div = document.querySelector(".result");
const pilihBatu = document.getElementById("batu");
const pilihKertas = document.getElementById("kertas");
const pilihGunting = document.getElementById("gunting");

// Computer
function getComputerChoice() {
  const choices = ["batu", "kertas", "gunting"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

// Menang
function win() {
  result_div.innerHTML = `Player Win!`;
}

// Kalah
function loses() {
  result_div.innerHTML = `Com Win!`;
}

// Seri
function draw() {
  result_div.innerHTML = `Draw!`;
}

// Game
function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "kertasbatu":
    case "batugunting":
    case "guntingkertas":
      win(userChoice, computerChoice);
      break;
    case "batukertas":
    case "guntingbatu":
    case "kertasgunting":
      loses(userChoice, computerChoice);
      break;
    case "batubatu":
    case "guntinggunting":
    case "kertaskertas":
      draw(userChoice, computerChoice);
      break;
  }
}

// User
function main() {
    pilihBatu.addEventListener("click", () => game("batu"));
    pilihKertas.addEventListener("click", () => game("kertas"));
    pilihGunting.addEventListener("click", () => game("gunting"));
}

// Reset
document.getElementById("resetbutton").addEventListener("click", function(){
        alert("Reset The Game!");
        main();
});