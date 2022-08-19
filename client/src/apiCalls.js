import axios from 'axios'

export const loginCall = async (userCredential, dispatch) => {
    dispatch({type:"LOGIN_START"});
    try {
        const res = axios.post("/auth/login",userCredential);
        dispatch({type:"LOGIN_SUCCESS"});
    } catch (error) {
        dispatch({type:"LOGIN_FAILURE"});
    }
}