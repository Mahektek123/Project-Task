import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Sun: 220,
    Mon: 10,
    Tue: 52,
    Wed: 200,
    Thur: 334,
    Fri: 390,
    Sat: 330
}

const defaultSun = 220
const defaultMon = 10
const defaultTue = 52
const defaultWed = 200
const defaultThur = 334
const defaultFri = 390
const defaultSat = 330

const chart = createSlice({
    name: 'ChartData',
    initialState,
    reducers: {
        updateSun: (state, action) => {
            console.log(action);
            state.Sun = action.payload
        },
        updateMon: (state, action) => {
            state.Mon = action.payload
        },
        updateTue: (state, action) => {
            state.Tue = action.payload
        },
        updateWed: (state, action) => {
            state.Wed = action.payload
        },
        updateThur: (state, action) => {
            state.Thur = action.payload
        },
        updateFri: (state, action) => {
            state.Fri = action.payload
        },
        updateSat: (state, action) => {
            state.Sat = action.payload
        },
    },
});

export const { updateFri, updateSat, updateMon, updateSun, updateThur, updateTue, updateWed } = chart.actions
export const MonVal = (state: {
    chart: any; Mon: any; 
}) => state.chart.Mon
export const TueVal = (state: {
    chart: any; Tue: any; 
}) => state.chart.Tue
export const WedVal = (state: {
    chart: any; Wed: any; 
}) => state.chart.Wed
export const ThurVal = (state: {
    chart: any; Thur: any; 
}) => state.chart.Thur
export const FriVal = (state: {
    chart: any; Fri: any; 
}) => state.chart.Fri
export const SatVal = (state: {
    chart: any; Sat: any; 
}) => state.chart.Sat
export const SunVal = (state: {
    chart: any; Sun: any; 
}) => state.chart.Sun

export default chart.reducer