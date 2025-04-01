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

function choose(choice) {
  switch (choice) {
    case "rock":
      user_choice = choice;
      document.getElementById("user-output").innerHTML = "🗿";
      break;
    case "paper":
      user_choice = choice;
      document.getElementById("user-output").innerHTML = "📄";

      break;
    case "scissors":
      user_choice = choice;
      document.getElementById("user-output").innerHTML = "✂️";

      break;
    default:
      break;
  }
}
