import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { sideMenuChange } from "./slices/slice";
import allDataReducer from "./slices/slice";


const rootReducer = combineReducers({
    allData: allDataReducer, 
  })
  
  const Store = configureStore({
    reducer: rootReducer,
  })
  

export default Store