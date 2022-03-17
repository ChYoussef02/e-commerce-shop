import handleCart from "./handlecart" 
import { combineReducers } from 'redux'
import { userSigninReducer } from "./userReducers"


const rootReducers = combineReducers({
    handleCart,
     userSigninReducer
 
})
export default rootReducers
