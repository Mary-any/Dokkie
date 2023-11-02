import { api } from "@hboictcloud/api";

api.configure({
    url: "https://api.hbo-ict.cloud",
    apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
    database: "pb1b2324_anyanwm_dokkie",
    environment: "live"
});

// Add Events to the database

function createEvent(): void {
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
    
    // Hier moet je het eventID instellen op basis van het geselecteerde evenement
    // Vervang het volgende eventID-nummer "123" door het juiste ID.
    const eventId: number = 3;

    api.queryDatabase ( participantQuery, eventId, name);
    console.log  ("Participant is created", name);
}

const inviteParticipantButton: HTMLButtonElement = document.querySelector ( "#inviteParticipant" ) as HTMLButtonElement;
inviteParticipantButton.addEventListener ( "click", createParticipant ) ;