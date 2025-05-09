document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !btn.classList.contains("btn-active")) {
      //   console.log("Enter - down");
      btn.classList.add("btn-active");
    }
  });
  btn.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      //   console.log("Enter - up");
      btn.classList.remove("btn-active");
    }
  });
});

var user_choice;
var computer;

async function choose(choice) {
  reset();
  lockButtons();
  gameCounter = gameCounter + 1;
  updateGameCounter();
  computer = generateComputer();
  switch (choice) {
    case "🗿":
      user_choice = choice;
      document.getElementById("user-output").innerHTML = "🗿";
      await rollAnimation();
      compare();
      break;
    case "📄":
      user_choice = choice;
      document.getElementById("user-output").innerHTML = "📄";
      await rollAnimation();
      compare();
      break;
    case "✂️":
      user_choice = choice;
      document.getElementById("user-output").innerHTML = "✂️";
      await rollAnimation();
      compare();
      break;
    default:
      break;
  }
  updateCounter();
  unlockButtons();
}

const options = ["🗿", "📄", "✂️"];
function generateComputer() {
  randX = Math.floor(Math.random() * 3);
  return options[randX];
}

async function rollAnimation() {
  for (let index = 0; index < 20; index++) {
    for (let j = 0; j < options.length; j++) {
      const element = options[j];
      document.getElementById("com-output").innerHTML = element;
      await sleep(index * 10);
    }
  }
  document.getElementById("com-output").innerHTML = computer;
  await sleep(100);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function compare() {
  switch (computer) {
    case "🗿":
      switch (user_choice) {
        case "🗿":
          tie();
          break;
        case "📄":
          win();
          break;
        case "✂️":
          lose();
          break;
        default:
          break;
      }
      break;
    case "📄":
      switch (user_choice) {
        case "🗿":
          lose();
          break;
        case "📄":
          tie();
          break;
        case "✂️":
          win();
          break;
        default:
          break;
      }
      break;
    case "✂️":
      switch (user_choice) {
        case "🗿":
          win();
          break;
        case "📄":
          lose();
          break;
        case "✂️":
          tie();
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
}

function win() {
  document.getElementById("display").classList.add("win");
  document.getElementById("result").innerHTML = "Congrats You Won!!";
  userCounter = userCounter + 1;
}

function tie() {
  document.getElementById("display").classList.add("tie");
  document.getElementById("result").innerHTML = "Tie!! No one won!!";
  ties = ties + 1;
}

function lose() {
  document.getElementById("display").classList.add("lose");
  document.getElementById("result").innerHTML = "You lost!!";
  comCounter = comCounter + 1;
}

function reset() {
  displayClassList = document.getElementById("display").classList;

  document.getElementById("result").innerHTML = "";

  if (displayClassList.contains("win")) {
    displayClassList.remove("win");
  }
  if (displayClassList.contains("tie")) {
    displayClassList.remove("tie");
  }
  if (displayClassList.contains("lose")) {
    displayClassList.remove("lose");
  }
}

function lockButtons() {
  document.querySelectorAll("button").forEach((btn) => {
    btn.disabled = true;
  });
}

function unlockButtons() {
  document.querySelectorAll("button").forEach((btn) => {
    btn.disabled = false;
  });
}

let comCounter = 0;
let userCounter = 0;
let ties = 0;
function updateCounter() {
  document.getElementById("com-counter").innerHTML = comCounter;
  document.getElementById("user-counter").innerHTML = userCounter;
  document.getElementById("tie-counter").innerHTML = ties;
}

let gameCounter = 0;
function updateGameCounter() {
  document.getElementById("game-count").innerHTML = gameCounter;
}
