// import { api } from "@hboictcloud/api"; 

// api.configure({
//     url: "https://api.hbo-ict.cloud",
//     apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
//     database: "pb1b2324_anyanwm_dokkie",
//     environment: "live"
// });

// function createUser(): void {

//     const signupUsernameInput: HTMLInputElement = document.querySelector("#signupUsername") as HTMLInputElement;

//     const signupUsername: string = signupUsernameInput.value;

//     const signupEmailInput: HTMLInputElement = document.querySelector("#signupEMail") as HTMLInputElement;

//     const signupEmail: string = signupEmailInput.value;

//     const query: string = "INSERT INTO User(username, password, email) VALUES(0)";

//     api.queryDatabase(query, signupUsername);

//     console.log("User is aangemaakt", signupUsername);

// };

// const signupButton: HTMLButtonElement = document.querySelector("#signupButton") as HTMLButtonElement;

// signupButton.addEventListener("click", createUser);

// heeft contextmenu