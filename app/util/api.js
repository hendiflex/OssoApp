import * as firebase from "firebase";

//Register the user using email and password
const register = async (email, pass) => {
    try {
        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(body) {
          if (body === '') {
            originalSend.call(this);
          } else {
            originalSend.call(this, body);
          }
        };

        await firebase.auth()
            .createUserWithEmailAndPassword(email, pass);
    } catch (error) {
        console.log(error.toString());
        throw error.message;
    }
};

const login = async (email, pass) => {
    try {
        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(body) {
          if (body === '') {
            originalSend.call(this);
          } else {
            originalSend.call(this, body);
          }
        };

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
        const originalSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function(body) {
          if (body === '') {
            originalSend.call(this);
          } else {
            originalSend.call(this, body);
          }
        };

        await firebase.auth().signOut();
    } catch (error) {
        console.log(error.toString());
        throw error.message;
    }
}


export { register, login, logout };
