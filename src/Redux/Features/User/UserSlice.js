import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    name : ''
}

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers :{
        set : (state,data)=>{
            state.name = data.payload
        },
        clear:(state)=>{
            state.name = ''
        }
    }
})
const userReducer = userSlice.reducer
export default userReducer
export const userActions = userSlice.actions