import { configureStore } from "@reduxjs/toolkit";

import processSlice from "./pages/slices/processSlice";

export const store = configureStore({
    reducer: {
        processes:processSlice,
    },
  });

export default store
