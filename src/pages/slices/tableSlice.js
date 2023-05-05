import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    currentTime : 0,
    priorityBoostTime: 10,
    listOfQueues :[
        {
            processes:[],
            quantum: 0,
            currentTime: 0,
            priority: 0,
          },
          {
            processes:[],
            quantum: 0,
            currentTime: 0,
            priority: 1,
          },
          {
            processes:[],
            quantum: 0,
            currentTime: 0,
            priority: 2,
          },
          {
            processes:[],
            quantum: 0,
            currentTime: 0,
            priority: 3,
          },
    ]
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
        },
        addProcess: (state, action) => {
            state.listOfQueues.find(q => q.priority === action.payload.priority).processes.push(action.payload);
        },
    } 
})

export const getTableState = (state) => state.table;

export const {setCurrentTime,setPriorityBoostTime,setListOfQueues} = tableSlice.actions;
export default tableSlice.reducer;