import { configureStore } from "@reduxjs/toolkit";
import themeReducer  from "./slice";
import chart from "./slice2"

const store = configureStore({
    reducer:{
        theme: themeReducer,
        chart: chart
    }

})

export default store