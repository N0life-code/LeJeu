const codeData = {
    "05p6tv": "2 questions bonus offertes",
    "MEE6": "Un code se trouve sur le profil de 05p6",
    "Mexico": "Question à Kantan",
    "https://cdn.discordapp.com/emojis/956498353082994730.webp?size=96&quality=lossless": "question libre",
    "Discord": "C'est trop facile tu gagnes rien sale noob",
    "Arabe": "Vous pouvez voler une info à un adversaire",            
    "Bite": "Ta perversion et ton imaturité te permettent d'aller voir un organisateur",
    "Noel": "Le premier qui trouve gagne un nitro",
    "Sultan": "Tu as une deuxième chance avec les codes !",
    "OM": "Question à un adversaire",
    "PSG": "Question à un adversaire",
    "Wyldelphe": "2 questions à wyldelphe",
    "Event": "Question à un administrateur",
    "Sparte": "Tu peux défier un adversaire sans mettre en jeu une question",
    "Pute": "Tu peux échanger ta place avec un membre",
    "": "Qui ne tente rien n'a rien donc tu peux tout tenter",
    "JSP": "Tu as le droit de savoir ce que tu veux, utilisable une fois par équipe",
    // Add more codes and corresponding information as needed
};

function exchangeCode() {
    const codeInput = document.getElementById("codeInput");
    const resultContainer = document.getElementById("result");

    const enteredCode = codeInput.value;
    const exchangedInfo = codeData[enteredCode];

    if (exchangedInfo !== undefined) {
        resultContainer.innerHTML = `<p>Information: ${exchangedInfo}</p>`;
    } else {
        resultContainer.innerHTML = "<p>Invalid code. Please try again.</p>";
    }
}