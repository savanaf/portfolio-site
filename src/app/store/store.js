"use client";

import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  toggleState: false,
  menuOpen: false
};

function toggleReducer(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        toggleState: !state.toggleState
      };
    case 'MENU':
      return {
        ...state,
        menuOpen: !state.menuOpen
      };
    default:
      return state;
  }
}

// function menuReducer(state = initialState, action) {
//   switch (action.type) {
//     case 'MENU':
//       return {
//         ...state,
//         menuOpen: !state.menuOpen
//       };
//     default:
//       return state;
//   }
// }

export const store = 
configureStore({
  reducer: toggleReducer 
});