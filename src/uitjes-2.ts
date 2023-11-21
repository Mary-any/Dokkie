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

  
    const eventName: string = eventNameInput.value;

    const participantQuery: string = "INSERT INTO Participant (eventId, name, userid) VALUES (?, ?, ?)";
     
  
    const eventId: number = 2;

    let  e : HTMLSelectElement = document.getElementById ("participants") as HTMLSelectElement;

    let value: string = e.value;
    const participantId: number = parseInt(value); 
    let name:string = e.options[e.selectedIndex].text;

    


    api.queryDatabase ( participantQuery, eventId, name, participantId);

    console.log  ("Participant is created", name, eventId);
}

const inviteParticipantButton: HTMLButtonElement = document.querySelector ( "#inviteParticipant" ) as HTMLButtonElement;
inviteParticipantButton.addEventListener ( "click", createParticipant ) ;

// Add payments to the database

// function createPayment(): void {
//     const datePaidInput: HTMLInputElement = document.querySelector("#datePaid") as HTMLInputElement;
//     const descriptionInput: HTMLInputElement = document.querySelector("#description") as HTMLInputElement;
//     const amountInput: HTMLInputElement = document.querySelector("#expense") as HTMLInputElement;
//     const eventNameInput: HTMLInputElement = document.querySelector("#eventName") as HTMLInputElement;

//     const datePaid: string = datePaidInput.value;
//     const description: string = descriptionInput.value;
//     const amount: string = amountInput.value;
//     const eventName: string = eventNameInput.value;

//     const paymentQuery: string = "SELECT * FROM payment WHERE datePaid = ? description = ? amount = ? eventId = ? name =? ";
//     // "INSERT INTO Payment (datePaid, description, amount, eventId, name) VALUES (?, ?, ?, ?, ?)";


//     const eventId: number = 1; 

//     api.queryDatabase (paymentQuery, datePaid, description, amount, eventId, eventName);
//     console.log("Payment is created", datePaid,);
// }

// const addPaymentButton: HTMLButtonElement = document.querySelector("#addPayment") as HTMLButtonElement;
// addPaymentButton.addEventListener("click", createPayment);



async function listParticipants(): Promise<void> {

    const users: string | any[] = await api.queryDatabase( "SELECT * FROM user;");
    const select: HTMLSelectElement = document.getElementById("participants") as HTMLSelectElement;

    for(let index: number = 0; index < users.length; index++){
        console.log(users[index]);

        const optionItem: HTMLOptionElement = document.createElement("option");
        optionItem.innerHTML = users[index].username;
        optionItem.value = users[index].userId;
        select.appendChild(optionItem);
    }

}

listParticipants();