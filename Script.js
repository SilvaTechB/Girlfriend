const message = "You're the love of my life, my partner in every sense of the word. I'm so grateful to have you by my side. Happy Girlfriend's Day, my love!";
const button = document.getElementById("button");
const messageElement = document.getElementById("message");

button.addEventListener("click", () => {
    messageElement.innerText = message;
    button.style.display = "none";
});
