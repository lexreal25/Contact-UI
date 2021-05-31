import firebase from '../../firebase/firebase'

export function createEmailAccount(email, password){
    return async (dispatch) => {
         try {
           const user =  firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            // dispatch({
            //     type: "LOGGED_IN",
            //     payload: user
            // })
            dispatch(loggedIn(user))
         } catch (error) { 
             console.log(error)
         }
    }
}

export function loginEmailAccount(email, password){
    return async (dispatch) => {
         try {
             const user = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                dispatch(loggedIn(user))
         } catch (error) {
             console.log(error)
         }
    }
}

export function logOut(){
    return async (dispatch) => {
        try {
            await firebase.auth().signOut()
            dispatch(loggedOut)
        } catch (error) {
            console.log(error)
        }
    }
}


export function loggedIn(user){
    return{
        type:'LOGGED_IN',
        payload: user
    }
}

//function to dispatch loggout
export function loggedOut(){
    return{
        type:'LOGGED_OUT',
    }
}

//funtion to handle errors

export function registerError(error){
    return{
        type:'REGISTER_ERROR',
        payload: error
    }
}