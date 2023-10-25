document.addEventListener("DOMContentLoaded", () => {
    // Array to store expenses
    const expenses = [];
    const friends = [];

    // Get elements from the DOM
    const expenseInput = document.getElementById("expense");
    const descriptionInput = document.getElementById("description");
    const addExpenseButton = document.getElementById("addExpense");
    const friendNameInput = document.getElementById("friendName");
    const inviteFriendButton = document.getElementById("inviteFriend");
    const friendList = document.getElementById("friendList");
    const expenseList = document.getElementById("expenseList");
    const totalAmount = document.getElementById("totalAmount");

    // Event listener for adding an expense
    addExpenseButton.addEventListener("click", () => {
        const expense = parseFloat(expenseInput.value);
        const description = descriptionInput.value;

        if (!isNaN(expense) && description) {
            expenses.push({ description, amount: expense });
            updateExpenseList();
            expenseInput.value = "";
            descriptionInput.value = "";
        }
    });

    // Event listener for inviting a friend
    inviteFriendButton.addEventListener("click", () => {
        const friendName = friendNameInput.value;

        if (friendName) {
            friends.push(friendName);
            updateFriendList();
            friendNameInput.value = "";
        }
    });

    // Function to update the friend list
    function updateFriendList() {
        friendList.innerHTML = "";
        friends.forEach((friend) => {
            const listItem = document.createElement("li");
            listItem.innerText = friend;
            friendList.appendChild(listItem);
        });
    }

    // Function to update the expense list
    function updateExpenseList() {
        expenseList.innerHTML = "";
        expenses.forEach((expense) => {
            const listItem = document.createElement("li");
            listItem.innerText = `${expense.description}: €${expense.amount.toFixed(2)}`;
            expenseList.appendChild(listItem);
        });
        updateTotalAmount();
    }

    // Function to calculate and update the total amount
    function updateTotalAmount() {
        const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);
        totalAmount.textContent = `Total amount: €${total.toFixed(2)}`;
    }
});
