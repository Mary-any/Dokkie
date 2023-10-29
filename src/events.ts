// import { api } from "@hboictcloud/api";

// api.configure({
//     url: "https://api.hbo-ict.cloud",
//     apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
//     database: "pb1b2324_anyanwm_dokkie",
//     environment: "live"
// });

// function createEvent() : void {
//     const produceInput: HTMLInputElement= document.querySelector("#name") as HTMLInputElement;
//     const name: string = produceInput.value;
//     const query: string = "INSERT INTO Event (description, dateCreated) VALUES (?, ?)";
    
//     // const eventId: string= "0";
//     // const description: string= "test";

//     const dateCreated: string= "2023-10-20";
//     api.queryDatabase(query, name, dateCreated );
//     console.log("Event is created", name);
// }

// const produce: HTMLBodyElement = document.querySelector("#produce") as HTMLButtonElement;
// produce.addEventListener("click", createEvent);