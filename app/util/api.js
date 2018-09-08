import * as firebase from "firebase";

//Register the user using email and password
const register = async (email, pass) => {
    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);

        console.log("Account created");

        // Navigate to the Home page, the user is auto logged in

    } catch (error) {
        console.log(error.toString())
    }
};

const login = async (email, pass) => {
    try {
        // await firebase.auth()
        //     .signInWithEmailAndPassword(email, pass);

        console.log("Logged In!");

        // Navigate to the Home page

    } catch (error) {
        console.log(error.toString())
    }
};


export { register, login };
