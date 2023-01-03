import {configureStore} from "@reduxjs/toolkit"
import broadcastReducer from "../Features/Broadcasts/BroadcastsSlice"
import userReducer from "../Features/User/UserSlice"

const store = configureStore({
    reducer : {
        user : userReducer,
        broadcast : broadcastReducer,
    }
})
export default store