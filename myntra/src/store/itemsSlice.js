import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // payload must be array
    },
  },
});

export const itemsActions = itemsSlice.actions;

export default itemsSlice;

// import {createSlice} from "@reduxjs/toolkit";

// const itemsSlice = createSlice({
//   name: 'items',
//   initialState: [],
//   reducers: {
//     addInitialItems: (state, action) => {
//       return action.payload;
//     }
//   }
// });

// export const itemsActions = itemsSlice.actions;

// export default itemsSlice;