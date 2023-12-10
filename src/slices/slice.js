import { createSlice } from '@reduxjs/toolkit';

const iState = {
    sideMenuOff: true,
    qrresult : null
}

const allDataSlice = createSlice({
    name: 'allData',
    initialState: iState ,
    reducers:{
        sideMenuChange: (state) => {
            state.sideMenuOff ? state.sideMenuOff = false :  state.sideMenuOff = true
        },

        qrresultadd : (state,action) => {
            state.qrresult = action.payload
        }
        
    }
})


export const sideMenuSelector = (state) => state.allData.sideMenuOff
export const qrresultSelector = (state) => state.allData.qrresult
export const {sideMenuChange, qrresultadd} = allDataSlice.actions
export default allDataSlice.reducer















