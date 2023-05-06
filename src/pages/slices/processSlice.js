import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    color: "#FF0000",
    cpuBurst: 0,
    ioBurst: 0,
    totalTime: 0,
    cpuVariance: 0,
    ioVariance: 0,
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
    setArrivalTime: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.arrivalTime = action.payload.arrivalTime;
      }
    },
    setCpuBurst: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.cpuBurst = action.payload.cpuBurst;
      }
    },
    setIoBurst: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.ioBurst = action.payload.ioBurst;
      }
    },
    setStartTime: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.startTime = action.payload.startTime;
      }
    },
    setTotalTime: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.totalTime = action.payload.totalTime;
      }
    },
    setCpuVariance: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.cpuVariance = action.payload.cpuVariance;
      }
    },
    setIoVariance: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.ioVariance = action.payload.ioVariance;
      }
    },
    setCurrentTime: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        process.currentTime = action.payload.currentTime;
      }
    },
    getProcess: (state, action) => {
      const process = state.find((p) => p.id === action.payload.id);
      if (process) {
        return process;
      }
    },
    getColor: (state, processId) => {
      const process = state.find((p) => p.id === action.payload.id);
      return process.color;
    },
  },
});

export const getProcessState = (state) => state.processes;

export const {
  addProcess,
  setArrivalTime,
  setCpuBurst,
  setIoBurst,
  setStartTime,
  setTotalTime,
  setCpuVariance,
  setIoVariance,
  setCurrentTime,
  getProcess,
  getColor,
} = processSlice.actions;

export default processSlice.reducer;
