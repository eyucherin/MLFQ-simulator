import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    arrivalTime : 0,
    cpuBurst : 0,
    ioBurst : 0,
    totalTime : 0,
    cpuVariance : 0,
    currentTime: 0,
    priorityLevel:0,
}

export const processSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        setArrivalTime: (state, action) => {
            state.arrivalTime = action.payload;
        },
        setcpuBurst: (state, action) => {
            state.cpuBurst = action.payload;
        },
        setioBurst: (state, action) => {
            state.ioBurst = action.payload;
        },
        settotalTime: (state, action) => {
            state.totalTime = action.payload;
        },
        setcpuVariance: (state, action) => {
            state.cpuVariance = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setPriorityLevel: (state, action) => {
            state.priorityLevel = action.payload;
        }
    }
})

export const getProcessState = (state) => state.process;

export const {setArrivalTime,setcpuBurst,setioBurst,settotalTime,setcpuVariance} = processSlice.actions;


export default processSlice.reducer;