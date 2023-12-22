const questionsAndAnswers = [
    { question: "Comment s'appelle la ville du père noël ?", answer: "Rovaniemi" },
    { question: "Comment Fred appelle les arabes ?", answer: "Les terroristes" },
    { question: "Quel ping discord dérange tout le mopnde ?", answer: "@everyone" },
    { question: "Comment s'appelle wichigo alias Ali Baba ?", answer: "Wyldelphe" },
    { question: "En quelle année le grinch a-t-il fait sa première apparition ?", answer: "1966" },
    { question: "Dans quelle ville a été fondé l'ordre du temple solaire ?", answer: "Saconnex-d'Arve" },
    { question: "kuzco est-il alcoolique ?", answer: "ptet" },
    { question: "De quel jeu vient Pieta ?", answer: "Lords of the fallen" },
    { question: "Sur quel jeu Chi a connu LyfaStein ?", answer: "Tales of wind" }
];

const secretCode = "Fg5p2!2lp";
let discoveredCode = "";

function createBox(index) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.textContent = `?`;
    box.addEventListener("click", () => revealAnswer(index));
    return box;
}

function revealAnswer(index) {
    const userAnswer = prompt(questionsAndAnswers[index].question);
    if (userAnswer && userAnswer.toLowerCase() === questionsAndAnswers[index].answer.toLowerCase()) {
        discoveredCode += secretCode[index];
        alert(`Correct! Code: ${discoveredCode}`);
        document.getElementById(`box${index}`).textContent = secretCode[index];
    } else {
        alert("Incorrect answer. Try again!");
    }

    if (discoveredCode === secretCode) {
        alert("Congratulations! You have revealed the entire secret code!");
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function initializeGame() {
    shuffleArray(questionsAndAnswers);
    const gameContainer = document.getElementById("game-container");

    for (let i = 0; i < questionsAndAnswers.length; i++) {
        const box = createBox(i);
        box.setAttribute("id", `box${i}`);
        gameContainer.appendChild(box);
    }
}

initializeGame();