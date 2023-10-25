import { api } from "@hboictcloud/api";

api.configure({
    url: "https://api.hbo-ict.cloud",
    apiKey: "pb1b2324_anyanwm.Wcfh0zROqOcia2YT",
    database: "pb1b2324_anyanwm_dokkie",
    environment: "live"
});


// sign up form

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

        if (registerPassword !== confirmPassword) {
            console.error("Password does not match"); 
            return;
        }
    
        const query: string = "INSERT INTO user (username, email, password) VALUES (? ,? , ?)";
        api.queryDatabase(query, registerUsername, registerEmail, registerPassword,);
        console.log("user has been created", registerUsername, registerEmail, registerPassword,);
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



// Login form


function loginUser(): void{
    const loginEmailInput: HTMLInputElement = document.querySelector("#loginEmail") as HTMLInputElement;
    const loginPasswordlInput: HTMLInputElement = document.querySelector("#loginPassword") as HTMLInputElement;

    if (loginEmailInput && loginPasswordlInput) {
        const loginEmail:  string= loginEmailInput.value;
        console.log("Email:", loginEmail);

        const loginPassword: string = loginPasswordlInput.value;
        console.log("Password:", loginPassword);



        // if (loginPasswordl !== confirmPassword) {
        //     console.error("password is incorrect"); 
        //     return;
        // }
    
        // const query: string = "Select * From Participant Where Email = ? and password = ?";
        const query: string = "INSERT INTO Participant (email, password) VALUES (? ,? )";
        api.queryDatabase(query, loginEmail, loginPassword,);
        console.log("user has logged in", loginEmail, loginPassword,);
    }   else {

        console.error("could not find needed input-field");
    }
}

const loginButton: HTMLButtonElement = document.querySelector("#loginButton") as HTMLButtonElement;
if (loginButton){
    loginButton.addEventListener("click", loginUser);
} else{
    console.error("cant find loginButton");
} 