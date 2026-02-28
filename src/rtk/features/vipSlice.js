// features/vipSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    vipData: [],
    activeVipId: null, // التاب الحالي
};

export const vipSlice = createSlice({
    name: "vip",
    initialState,
    reducers: {
        setVipData: (state, action) => {
            state.vipData = action.payload;
            if (!state.activeVipId && action.payload.length > 0) {
                state.activeVipId = action.payload[0].id;
            }
        },
        setActiveVip: (state, action) => {
            state.activeVipId = action.payload;
        },
    },
});

export const { setVipData, setActiveVip } = vipSlice.actions;
export default vipSlice.reducer;