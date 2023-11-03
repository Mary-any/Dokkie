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

        //Clear the fields
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

        // Instead of an INSERT INTO query, use a SELECT query to check the user
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

        //Clear the fields
        loginEmailInput.value = "";
        loginPasswordInput.value = "";


    } else {
        console.error("could not find needed input-field");
    }

    session.set ("loggedin", true);
    session.set ("username","mary");

    const loggedin: string  = session.get("loggedin");
    if(loggedin){
        console.log("oke");
        console.log(session.get("username"), "has logged in");
        location.replace("../profiel.html");
    } else {
        console.log("You have to login in first");
    }
}

const loginButton: HTMLButtonElement = document.querySelector("#loginButton") as HTMLButtonElement;
if (loginButton) {
    loginButton.addEventListener("click", loginUser);
} else {
    console.error("cant find loginButton");
}
