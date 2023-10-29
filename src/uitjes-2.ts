import { api } from "@hboictcloud/api";

api.configure({
    url: "https://api.hbo-ict.cloud",
    apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
    database: "pb1b2324_anyanwm_dokkie",
    environment: "live"
});

function createEvent(): void {
    const expenseInput: HTMLInputElement = document.querySelector("#expense") as HTMLInputElement;
    const eventNameInput: HTMLInputElement = document.querySelector("#eventName") as HTMLInputElement;

    const expense: string = expenseInput.value;
    const eventName: string = eventNameInput.value;

    const query: string = "INSERT INTO Event (description, dateCreated) VALUES (?, ?)";
   
    // const dateCreated: string = "2023-10-30";

    // Genereer de huidige datum en tijd in het juiste SQL-formaat (bijv. "2023-10-30 14:25:00")
    const dateCreated: string =  new Date().toISOString().slice(0, 19).replace("T", " ");


    api.queryDatabase(query, eventName, dateCreated); // Verander "description" naar "eventName"
    console.log("Event is created", eventName);
}

const addExpense: HTMLButtonElement = document.querySelector("#addExpense") as HTMLButtonElement;
addExpense.addEventListener("click", createEvent);
