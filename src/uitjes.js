document.addEventListener("DOMContentLoaded", () => {
    const explanations = [];
    const participants = [];
    const expenses = [];

    const explanationInput = document.getElementById("description");
    const addExplanationButton = document.getElementById("addExplanation");


    const explanationList = document.getElementById("descriptionList");
    const participantNameInput = document.getElementById("participantName");


    const inviteParticipantButton = document.getElementById("inviteParticipant");
    const participantList = document.getElementById("participantList"); 


    const expenseInput = document.getElementById("expense");
    const eventNameInput = document.getElementById("eventName");


    const addExpenseButton = document.getElementById("addExpense");
    const expenseList = document.getElementById("expenseList");


    const totalAmount = document.getElementById("totalAmount");
    const totalBalance = document.getElementById("totalBalance");


    addExplanationButton.addEventListener("click", () => {
        const explanationText = explanationInput.value;
        if (explanationText) {
            explanations.push(explanationText);
            updateExplanationList();
            explanationInput.value = "";
        }
    });


    inviteParticipantButton.addEventListener("click", () => { 
        const participantName = participantNameInput.value;
        if (participantName) {
            participants.push(participantName);
            updateParticipantList();
            participantNameInput.value = "";
        }
    });


    addExpenseButton.addEventListener("click", () => {
        const expenseAmount = parseFloat(expenseInput.value);
        const eventName = eventNameInput.value;
        if (!isNaN(expenseAmount) && eventName) {
            const expenseText = `Event: ${eventName}<br>Amount: €${expenseAmount.toFixed(2)}`;
            expenses.push(expenseText);
            updateExpenseList();
            expenseInput.value = "";
            eventNameInput.value = "";
        }
    });


    function updateExplanationList() {
        explanationList.innerHTML = "";
        explanations.forEach((explanation) => {
            const listItem = document.createElement("li");
            listItem.textContent = explanation;
            explanationList.appendChild(listItem);
        });
    }


    function updateParticipantList() {
        participantList.innerHTML = "";
        participants.forEach((participant) => {
            const listItem = document.createElement("li");
            listItem.textContent = participant;
            participantList.appendChild(listItem);
        });
    }


    function updateExpenseList() {
        expenseList.innerHTML = "";
        expenses.forEach((expense) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = expense;
            expenseList.appendChild(listItem);
        });
        updateTotalAmount();
    }

    
    function updateTotalAmount() {
        const total = expenses.reduce((acc, expense) => {
            const amountString = expense.split("<br>Amount: €")[1];
            return acc + parseFloat(amountString);
        }, 0);
        totalAmount.innerHTML = `Total amount: €${total.toFixed(2)}`;
        totalBalance.innerHTML = `Total Balance: €${total.toFixed(2)}`;
    }
});
