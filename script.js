function updateCardNumberLabel() {
    const cardNumberInput = document.getElementById("card-num");
    const cardNumberLabel = document.querySelector("label[for='card-num']");

    if (cardNumberInput === document.activeElement) {
        cardNumberLabel.textContent = "XXXX XXXX XXXX XXXX";
    } else {
        cardNumberLabel.textContent = "Card Number";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cardNumberInput = document.getElementById("card-num");

    cardNumberInput.addEventListener("focus", updateCardNumberLabel);
    cardNumberInput.addEventListener("blur", updateCardNumberLabel);
});