import Axios from "axios";
import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../constants/userConstants";
import Cookie from "js-cookie"




const signin = (email, password) => async (dispatch) => {
 dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
 try {
   const { data } = await Axios.post("/api/user/login", { email, password });
   dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
   Cookie.set('userInfo', JSON.stringify(data));
 } catch (error) {
   dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
 }
}


export {signin}