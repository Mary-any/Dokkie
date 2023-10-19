import { api } from "@hboictcloud/api";

api.configure({
    url: "https://api.hbo-ict.cloud",
    apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
    database: "pb1b2324_anyanwm_dokkie",
    environment: "live"
});


function createUser(): void{
    const registerUsernameInput: HTMLInputElement = document.querySelector("#registerUsername") as HTMLInputElement;
    const registerEmailInput: HTMLInputElement = document.querySelector("#registerEmail") as HTMLInputElement;
    const registerPasswordInput: HTMLInputElement = document.querySelector("#registerPassword") as HTMLInputElement;
    const confirmPasswordInput: HTMLInputElement = document.querySelector("#confirmPassword") as HTMLInputElement;

    
    if (registerUsernameInput && registerEmailInput && registerPasswordInput && confirmPasswordInput) {
        const registerUsername:  string= registerUsernameInput.value;
        console.log("Username:", registerUsername);

        const registerEmail: string = registerEmailInput.value;
        console.log("Email:", registerEmail);

        const registerPassword: string = registerPasswordInput.value;
        console.log("Password:", registerPassword);

        const confirmPassword: string = confirmPasswordInput.value;
        console.log("Password:", confirmPassword);

        if (registerPasswordInput !== confirmPasswordInput) {
            console.error("Password does not match"); 
            return;
        }
    
        const query: string = "INSER INTO user(username,email,password) VALUES (? ,? , ?)";
        api.queryDatabase(query, registerUsernameInput, registerEmailInput, registerPasswordInput, confirmPasswordInput);
        console.log("user has been created", registerUsernameInput, registerEmailInput, registerPasswordInput, confirmPasswordInput);
    }   else {

        console.error("could not find needed input-field");
    }
}


const Registerbutton: HTMLButtonElement = document.querySelector("#Registerbutton") as HTMLButtonElement;
if (Registerbutton){
    Registerbutton.addEventListener("click", createUser);
} else{
    console.error("cant find Registerbutton");
} 