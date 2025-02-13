const GIST_ID = "3d33000b0f84d581ef0cffb58a43d86b";
const GIST_URL = `https://api.github.com/gists/${GIST_ID}`;
const ACCESS_TOKEN = "";


// Mettre à jour le compteur de clics dans le Gist
async function saveClickData(noClicks) {
    const updatedContent = JSON.stringify({ noClicks }, null, 2);

    const body = JSON.stringify({
        description: "Mise à jour du compteur de clics",
        files: { "data.json": { content: updatedContent } }
    });

    try {
        await fetch(GIST_URL, {
            method: "PATCH",
            headers: {
                "Accept": "application/vnd.github.v3+json",
                "Authorization": `token ${ACCESS_TOKEN}`
            },
            body: body
        });
        console.log("Données sauvegardées avec succès !");
    } catch (error) {
        console.error("Erreur lors de l'enregistrement :", error);
    }
}

(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("file:///D:/Projet/git/valentin/")) {
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                let btnNo = document.querySelector('.no-button');
                let btnYes = document.querySelector('.yes-button');
                if (btnNo) btnNo.textContent = "Attend ! pourquoi ?";
                if (btnYes) btnYes.textContent = "Meme un peu ??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                let btnYes = document.querySelector('.yes-button');
                let btnNo = document.querySelector('.no-button');
                if (btnYes) btnYes.removeEventListener("click", handleYes);
                if (btnNo) btnNo.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();

const messages = [
    "Tu es sûr(e) ?",
    "Vraiment sûr(e) ??",
    "Tu en es certain(e) ?",
    "Pookie s'il te plaît...",
    "Réfléchis bien !",
    "Si tu dis non, je serai vraiment triste...",
    "Je serai très triste...",
    "Je serai très très très triste...",
    "Ok d'accord, j'arrête de demander...",
    "Je rigole, dis oui s'il te plaît ! ❤️"
];

let messageIndex = 0;
let noClickCount = 0;


function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    noClickCount++;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
    saveClickData(noClickCount);
}