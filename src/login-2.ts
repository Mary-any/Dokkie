import "/src/hboictcloud-config";
import{ api, session } from "@hboictcloud/api";



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

        // Leeg de velden
        registerUsernameInput.value = "";
        registerEmailInput.value = "";
        registerPasswordInput.value = "";
        confirmPasswordInput.value = "";
         
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


function loginUser(): void {
    const loginEmailInput: HTMLInputElement = document.querySelector("#loginEmail") as HTMLInputElement;
    const loginPasswordInput: HTMLInputElement = document.querySelector("#loginPassword") as HTMLInputElement;

    if (loginEmailInput && loginPasswordInput) {
        const loginEmail: string = loginEmailInput.value;
        console.log("Email:", loginEmail);

        const loginPassword: string = loginPasswordInput.value;
        console.log("Password:", loginPassword);

        // In plaats van een INSERT INTO-query, gebruik je een SELECT-query om de gebruiker te controleren
        const query: string = "SELECT * FROM user WHERE email = ? AND password = ?";

        api.queryDatabase(query, loginEmail, loginPassword)
            .then((results) => {

                if (results && results.length > 0) {
                    console.log( "User logged in", results);
                } else {
                    console.error( "Login details incorrect");
                }
            })
            .catch((error) => {
                console.error("Error logging in", error);
            });

        // Leeg de velden
        loginEmailInput.value = "";
        loginPasswordInput.value = "";


    } else {
        console.error("Kcould not find needed input-field");
    }
}

const loginButton: HTMLButtonElement = document.querySelector("#loginButton") as HTMLButtonElement;
if (loginButton) {
    loginButton.addEventListener("click", loginUser);
} else {
    console.error("cant find loginButton");
}
