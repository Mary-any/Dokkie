document.addEventListener("DOMContentLoaded", () => {
    const explanations = [];
    const participants = [];
    const expenses = [];
    const payments = [];

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

    const addPaymentButton = document.getElementById("addPayment");
    const datePaidInput = document.getElementById("datePaid"); // Nieuw invoerveld voor datePaid

    const totalAmount = document.getElementById("totalAmount");
    const totalBalance = document.getElementById("totalBalance");


    /// eventlistener for "Add Payment" button
    addPaymentButton.addEventListener("click", () => {
        const datePaid = datePaidInput.value;
        const paymentAmount = parseFloat(expenseInput.value); 
        const eventName = eventNameInput.value;

        if (!isNaN(paymentAmount) && eventName) {
       
            const paymentText = `Event: ${eventName}, Date Paid: ${datePaid}, Amount: €${paymentAmount.toFixed(2)}`;
            payments.push(paymentText);

           
            // Update the list of payments
            updatePaymentList();
            datePaidInput.value = "";
            expenseInput.value = ""; 
            eventNameInput.value = "";
        }
    });

    // The rest of my update features

    function updatePaymentList() {
        const paymentList = document.getElementById("expenseList"); // De ID moet "expenseList" zijn
        paymentList.innerHTML = "";
        payments.forEach((payment) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = payment;
            paymentList.appendChild(listItem);
        });
        updateTotalAmount();
    }


    // eventlistener for "Add Explanation" button
    addExplanationButton.addEventListener("click", () => {
        const explanationText = explanationInput.value;
        if (explanationText) {
            explanations.push(explanationText);
            updateExplanationList();
            explanationInput.value = "";
        }
    });

    // eventlistener for "Add Participan" button
    inviteParticipantButton.addEventListener("click", () => { 
        const participantName = participantNameInput.value;
        if (participantName) {
            participants.push(participantName);
            updateParticipantList();
            participantNameInput.value = "";
        }
    });

    // eventlistener for "Add Expense" button
    addExpenseButton.addEventListener("click", async () => {
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

        console.log(participantList);
        
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


//  WhatsApp" Button
const shareWhatsAppButton = document.getElementById("shareWhatsApp");
shareWhatsAppButton.addEventListener("click", () => {
    const totalAmount = document.getElementById("totalAmount").textContent;
    const expenseList = document.getElementById("expenseList").innerText;

    const message = `Outing settlement\n\n${totalAmount}\n\Outing:\n${expenseList}`;

    
    // WhatsApp shareable link
    const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

  
    // Open a new tab with the WhatsApp link
    window.open(whatsappURL);
});
