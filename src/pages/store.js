import { configureStore } from "@reduxjs/toolkit";

import processSlice from "./slices/processSlice";
import tableSlice from "./slices/tableSlice";
import queueSlice from "./slices/queueSlice";

export const store = configureStore({
    reducer: {
        processes:processSlice,
        // table:tableSlice,
        // queue: queueSlice,
    },
  });

export default store
