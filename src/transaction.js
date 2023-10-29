
function validateForm() {
    let ibanInput = document.getElementById("Iban");
    let amountInput = document.getElementById("amount");
    let receiverInput = document.getElementById("receiver");

    if (ibanInput.value === "") {
        alert("Please enter the IBAN.");
        return false;
    }

    if (amountInput.value === "") {
        alert("Please enter the amount.");
        return false;
    }

    if (receiverInput.value === "") {
        alert("Please enter the receiver.");
        return false;
    }

    // Als alle validaties slagen, kun je hier de code toevoegen om het formulier te verzenden.
    // Bijvoorbeeld: document.getElementById("paymentForm").submit();
};
