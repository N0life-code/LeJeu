const giftCodes = [
    { uniqueCode: "933061763497328641", accessCode: "XGPASS", percentage: 30, index: "code Xbox PC Game Pass de 3 mois", unlocked: false },
    { uniqueCode: "FRANCE", accessCode: "MACRON", percentage: 20, index: "Discord nitro 1 mois", unlocked: false },
    { uniqueCode: "KALASH", accessCode: "TOMBOLO", percentage: 50, index: "Discord nitro 1 mois", unlocked: false },
    { uniqueCode: "LOMBARDIE", accessCode: "LECCO", percentage: 50, index: "Discord nitro 1 mois", unlocked: false },
    // Ajoute d'autres codes avec leurs pourcentages et indices respectifs
];

const indiceCodes = [
    { uniqueCode: "GRINCH", accessCode: "GRINCH", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "RAMADAN", accessCode: "RAMADAN", percentage: 20, index: "Question à Chi", unlocked: false },
    { uniqueCode: "TULIPE", accessCode: "TULIPE", percentage: 50, index: "Les organisateurs vous offrent une fleur, à vous de choisir", unlocked: false },
    { uniqueCode: "STARBUCKS", accessCode: "STARBUCKS", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "PEROU", accessCode: "PEROU", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "PARIS", accessCode: "PARIS", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "DONALD", accessCode: "DONALD", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "PYTHON", accessCode: "PYTHON", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "EA", accessCode: "EA", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "ACTIVISION", accessCode: "ACTIVISION", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "ACADIE", accessCode: "ACADIE", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "OL", accessCode: "OL", percentage: 30, index: "Question à un Ali Baba", unlocked: false },
    { uniqueCode: "TREVOR", accessCode: "TREVOR", percentage: 30, index: "Question à Pichou", unlocked: false },
    { uniqueCode: "SHAY", accessCode: "SHAY", percentage: 30, index: "Question à un Kuzco", unlocked: false },
    { uniqueCode: "COLUMBINE", accessCode: "COLUMBINE", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "WONKA", accessCode: "WONKA", percentage: 30, index: "Question à un organisateur", unlocked: false },
    { uniqueCode: "MATA", accessCode: "MATA", percentage: 30, index: "Question libre", unlocked: false },
    { uniqueCode: "RENNES", accessCode: "RENNES", percentage: 30, index: "Question à un adversaire", unlocked: false },
    { uniqueCode: "1860", accessCode: "1860", percentage: 30, index: "Question à un adversaire", unlocked: false },
    // Ajoute d'autres codes avec leurs pourcentages et indices respectifs
];

let attemptsGift = 0;
let attemptsIndice = 0;

let areButtonsUnlocked = false;

function isCadeauUnlocked() {
    return giftCodes.some(code => !code.unlocked);
}

function isIndiceUnlocked() {
    return indiceCodes.some(code => !code.unlocked);
}

function generateCadeau() {
    if (!isCadeauUnlocked()) {
        alert("Tous les cadeaux sont débloqués. Réinitialisez pour continuer.");
        return;
    }

    const unlockCode = prompt("Entrez le code pour débloquer l'accès aux cadeaux :");
    const unlockedCadeau = giftCodes.find(code => code.accessCode === unlockCode);

    if (unlockedCadeau && !unlockedCadeau.unlocked) {
        attemptsGift++;
        unlockedCadeau.unlocked = true;
        document.getElementById('codeDisplay').innerText = `Cadeau généré: ${unlockedCadeau.index}`;
        alert(`Il vous reste ${10 - attemptsGift} essai(s).`);
    } else {
        alert("Code incorrect ou cadeau déjà débloqué. Accès non autorisé.");
    }
}

function generateIndice() {
    if (!isIndiceUnlocked()) {
        alert("Tous les indices sont débloqués. Réinitialisez pour continuer.");
        return;
    }

    const unlockCode = prompt("Entrez le code pour débloquer l'accès aux indices :");
    const unlockedIndice = indiceCodes.find(code => code.accessCode === unlockCode);

    if (unlockedIndice && !unlockedIndice.unlocked) {
        attemptsIndice++;
        unlockedIndice.unlocked = true;
        document.getElementById('generatedIndex').innerText = `Indice généré: ${unlockedIndice.index}`;
        alert(`Il vous reste ${10 - attemptsIndice} essai(s).`);
    } else {
        alert("Code incorrect ou indice déjà débloqué. Accès non autorisé.");
    }
}

function unlockCadeau() {
    if (!areButtonsUnlocked) {
        alert("Débloquez d'abord l'accès aux boutons.");
        return;
    }

    const unlockCode = prompt("Entrez le code du cadeau pour débloquer l'accès :");

    const unlockedCadeau = giftCodes.find(code => code.uniqueCode === unlockCode);
    if (unlockedCadeau && !unlockedCadeau.unlocked) {
        unlockedCadeau.unlocked = true;
        alert("Accès au cadeau débloqué avec succès.");
    } else if (unlockedCadeau && unlockedCadeau.unlocked) {
        alert("Accès déjà débloqué pour ce cadeau.");
    } else {
        alert("Code incorrect ou cadeau déjà débloqué. Accès non autorisé.");
    }
}

function unlockIndice() {
    if (!areButtonsUnlocked) {
        alert("Débloquez d'abord l'accès aux boutons.");
        return;
    }

    const unlockCode = prompt("Entrez le code de l'indice pour débloquer l'accès :");

    const unlockedIndice = indiceCodes.find(code => code.uniqueCode === unlockCode);
    if (unlockedIndice && !unlockedIndice.unlocked) {
        unlockedIndice.unlocked = true;
        alert("Accès à l'indice débloqué avec succès.");
    } else if (unlockedIndice && unlockedIndice.unlocked) {
        alert("Accès déjà débloqué pour cet indice.");
    } else {
        alert("Code incorrect ou indice déjà débloqué. Accès non autorisé.");
    }
}

function unlockButtons() {
    const adminCodeInput = prompt("Entrez le code administrateur pour débloquer les boutons :");
    const adminCode = "DISCORD";
    if (adminCodeInput === adminCode) {
        areButtonsUnlocked = true;
        alert("Accès aux boutons débloqué avec succès.");

        // Débloquer les boutons de génération une fois que le bouton "Débloquer Boutons" a été débloqué
        document.getElementById('generateCadeauButton').classList = areButtonsUnlocked ? 'generateButtonUnlocked' : 'generateButtonLocked';
        document.getElementById('generateCadeauButton').disabled = !areButtonsUnlocked;

        document.getElementById('generateIndiceButton').classList = areButtonsUnlocked ? 'generateButtonUnlocked' : 'generateButtonLocked';
        document.getElementById('generateIndiceButton').disabled = !areButtonsUnlocked;
    } else {
        alert("Code administrateur incorrect. Accès non autorisé.");
    }
}

function resetIndices() {
    const adminCodeInput = prompt("Entrez le code administrateur pour réinitialiser les indices :");

    if (adminCodeInput !== adminCode) {
        alert("Code administrateur incorrect. Action non autorisée.");
        return;
    }

    giftCodes.forEach(code => code.unlocked = false);
    indiceCodes.forEach(code => code.unlocked = false);
    attemptsGift = 0;
    attemptsIndice = 0;

    alert("Les cadeaux et indices ont été réinitialisés avec succès.");
}