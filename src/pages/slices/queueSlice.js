/* eslint-disable react-hooks/rules-of-hooks */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  queue: [],
  quantum: 0,
  currentTime: 0,
  priority: 0,
};

export const queueSlice = createSlice({
  name: 'queue',
  initialState,
  reducers: {
    setQueue: (state, action) => {
      state.queue = action.payload;
    },
    setQuantum: (state, action) => {
      state.quantum = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.currentTime = action.payload;
    },
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const getQueueState = (state) => state.queue;

export const { setQueue, setQuantum, setCurrentTime, setPriority } = queueSlice.actions;

export default queueSlice.reducer;
