import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    name : ''
}

const broadcastSlice = createSlice({
    name : 'broadcast',
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
const broadcastReducer = broadcastSlice.reducer
export default broadcastReducer
export const broadcastActions = broadcastSlice.actions