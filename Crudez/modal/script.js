
const abrirModalButton = document.getElementById("abrir-modal");
const modal = document.getElementById("myModal");
const inputModal = document.getElementById("input-modal");
const confirmModalButton = document.getElementById("confirm-modal");
const closeButton = document.querySelector(".close-button");
const mostratext = document.getElementById("mostrar-text");

abrirModalButton.addEventListener("click", () => {
    modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

confirmModalButton.addEventListener("click", function () {
    const userInput = inputModal.value;
    if (userInput) {
        mostratext.innerText = userInput
    }
    modal.style.display = "none";
});


