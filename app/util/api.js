import * as firebase from "firebase";

//Register the user using email and password
const register = async (email, pass) => {
    try {
        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);
    } catch (error) {
        console.log(error.toString());
        throw error.message;
    }
};

const login = async (email, pass) => {
    try {
        await firebase.auth()
            .signInWithEmailAndPassword(email, pass);
    } catch (error) {
        console.log('ahkenrhkanreh')
        console.log(error.toString())
        throw error.message;
    }
};

const logout = async () => {
    try {
        await firebase.auth().signOut();
    } catch (error) {
        console.log(error.toString());
        throw error.message;
    }
}


export { register, login, logout };
