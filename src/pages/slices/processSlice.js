import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    color: "#FF0000",
    cpuBurst: 0,
    ioBurst: 0,
    cpuVariance: 0,
    ioVariance: 0,

    totalTime: 0,
    isFinished: false,
    isRunnable: false,
    unBlockedAt: 0,
    remainingCPUTime: 0,
  },
];

const processSlice = createSlice({
  name: "processes",
  initialState,
  reducers: {
    addProcess: (state, action) => {
      state.push(action.payload);
    },
    setTotalTime: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.totalTime = action.payload.totalTime;
      }
    },
    setIsFinished: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.isFinished = action.payload.isFinished;
      }
    },
    setIsRunnable: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.isRunnable = action.payload.isRunnable;
      }
    },
    setUnBlockedAt: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.unBlockedAt = action.payload.unBlockedAt;
      }
    },
    setRemainingCPUTime: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.remainingCPUTime = action.payload.remainingCPUTime;
      }
    },
  },
});

export const getProcessState = (state) => state.processes;

export const {
  addProcess,
  setTotalTime,
  setIsFinished,
  setIsRunnable,
  setUnBlockedAt,
  setRemainingCPUTime,
} = processSlice.actions;

export default processSlice.reducer;
