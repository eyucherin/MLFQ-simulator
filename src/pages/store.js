import { configureStore } from "@reduxjs/toolkit";
import processSlice from "./processSlice";
import tableSlice from "./tableSlice";
import queueSlice from "./queueSlice";

export const store = configureStore({
    reducer: {
        process:processSlice,
        table:tableSlice,
        queue: queueSlice,
    },
  });

export default store
