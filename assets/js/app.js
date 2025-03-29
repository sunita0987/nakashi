let currentCharacter = 0;
const characters = ["./assets/images/section2a.png", "./assets/images/section2b.png"];
const characterImages = document.querySelectorAll('.character-display img');
function updateCharacter() {
    characterImages.forEach((img, index) => {
        if (index === currentCharacter) {
            img.classList.remove("hidden");
        } else {
            img.classList.add("hidden");
        }
    });
}
function nextCharacter() {
    currentCharacter = (currentCharacter + 1) % characters.length;
    updateCharacter();
}
function prevCharacter() {
    currentCharacter = (currentCharacter - 1 + characters.length) % characters.length;
    updateCharacter();
}
