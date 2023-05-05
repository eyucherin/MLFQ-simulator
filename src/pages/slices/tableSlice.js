import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    currentTime : 0,
    priorityBoostTime: 10, 
    listOfQueues :[]
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setPriorityBoostTime: (state, action) => {
            state.priorityBoostTime = action.payload;
        },
        setListOfQueues: (state, action) => {
            state.listOfQueues = action.payload;
        }
    }  
})

export const getTableState = (state) => state.table;

export const {setCurrentTime,setPriorityBoostTime,setListOfQueues} = tableSlice.actions;
export default tableSlice.reducer;