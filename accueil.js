const validUsernames = ["teamrouge", "teambleue", "teamrose", "teamorange", "adminserv"];
const correctPassword = "Mille&1nuits";
let attempts = 0;
const maxAttempts = 3;

function authenticate(event) {
    event.preventDefault();
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    if (!validUsernames.includes(usernameInput.value)) {
        errorMessage.innerText = "Pseudo invalide. Veuillez réessayer.";
        return;
    }

    if (attempts >= maxAttempts) {
        errorMessage.innerText = "Trop de tentatives. Réessayez plus tard.";
        window.location.href = "blank.html";
        // Redirige vers une page blanche après 1 minute

        return;
    }

    if (passwordInput.value === correctPassword) {
        // Redirige vers la page principale si le mot de passe est correct
        window.location.href = "index.html";
    } else {
        // Incrémente le compteur d'essais et affiche un message d'erreur
        attempts++;
        errorMessage.innerText = "Mot de passe incorrect. Essai " + attempts + " sur " + maxAttempts + ".";
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password';
}