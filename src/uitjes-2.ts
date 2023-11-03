import { api } from "@hboictcloud/api";

api.configure({
    url: "https://api.hbo-ict.cloud",
    apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
    database: "pb1b2324_anyanwm_dokkie",
    environment: "live"
});

// Add Events to the database

async function createEvent(): Promise<void> {
    const expenseInput: HTMLInputElement = document.querySelector ("#expense" ) as HTMLInputElement;
    const eventNameInput: HTMLInputElement = document.querySelector ("#eventName" ) as HTMLInputElement;

    const expense: string = expenseInput.value;
    const eventName: string = eventNameInput.value;

    const query: string = "INSERT INTO Event (description) VALUES (?)";


    api.queryDatabase (query, eventName); 
    console.log ("Event is created", eventName );
}

const addExpense: HTMLButtonElement = document.querySelector ("#addExpense" ) as HTMLButtonElement;
addExpense.addEventListener ("click", createEvent,);


// Add participant to the database

function createParticipant(): void {
    const nameInput: HTMLInputElement = document.querySelector (" #participantName" ) as HTMLInputElement;
    const eventNameInput: HTMLInputElement = document.querySelector ("#eventName" ) as HTMLInputElement;

    const name: string = nameInput.value;
    const eventName: string = eventNameInput.value;

    const participantQuery: string = "INSERT INTO Participant (eventId, name ) VALUES (?, ?)";
    
  
    const eventId: number = 3;

    api.queryDatabase ( participantQuery, eventId, name);
    console.log  ("Participant is created", name);
}

const inviteParticipantButton: HTMLButtonElement = document.querySelector ( "#inviteParticipant" ) as HTMLButtonElement;
inviteParticipantButton.addEventListener ( "click", createParticipant ) ;

// Add payments to the database

function createPayment(): void {
    const datePaidInput: HTMLInputElement = document.querySelector("#datePaid") as HTMLInputElement;
    const descriptionInput: HTMLInputElement = document.querySelector("#description") as HTMLInputElement;
    const amountInput: HTMLInputElement = document.querySelector("#expense") as HTMLInputElement;
    const eventNameInput: HTMLInputElement = document.querySelector("#eventName") as HTMLInputElement;

    const datePaid: string = datePaidInput.value;
    const description: string = descriptionInput.value;
    const amount: string = amountInput.value;
    const eventName: string = eventNameInput.value;

    const paymentQuery: string = "SELECT * FROM payment WHERE datePaid = ? description = ? amount = ? eventId = ? name =? ";
    // "INSERT INTO Payment (datePaid, description, amount, eventId, name) VALUES (?, ?, ?, ?, ?)";


    const eventId: number = 1; 

    api.queryDatabase (paymentQuery, datePaid, description, amount, eventId, eventName);
    console.log("Payment is created", datePaid,);
}

const addPaymentButton: HTMLButtonElement = document.querySelector("#addPayment") as HTMLButtonElement;
addPaymentButton.addEventListener("click", createPayment);