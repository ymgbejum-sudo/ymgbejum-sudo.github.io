const button = document.getElementById("toggleButton");

button.addEventListener("click", () => {
  document.body.classList.toggle("party");

  button.textContent =
    document.body.classList.contains("party")
      ? "Turn It Off 😮"
      : "Click Me!";
});
