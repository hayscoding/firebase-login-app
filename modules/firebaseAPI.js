import * as firebase from 'firebase'

export const createUser = (email, password) => {
	console.log('CreateUser has been called.')

  firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch((error) => console.log('createUser error: ', error));
}

export const signInUser = (email, password) => {
	firebase.auth().signInWithEmailAndPassword(email, password)
		.catch((error) => console.log('createUser error: ', error));
}

export const logoutUser = () => {
	firebase.auth().signOut();
}