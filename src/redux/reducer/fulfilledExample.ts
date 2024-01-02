import { createSlice } from "@reduxjs/toolkit";
import { getListBucket as otherBucket } from "./reduxExample";
interface responseWrapper {
    res: boolean,
    isLoading: boolean;
}
export const initialState: responseWrapper = {
    res: false,
    isLoading: false
};
const getTemporalCounselorAnswerSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // 다른 bucket의 실패, 성공을 거져와서 reducer를 더 만들수 있다
        builder.addCase(otherBucket.fulfilled, (state, action) => {
            console.log('fulfilled');
            state.res = action.payload;
            state.isLoading = false;
            return state;
        })
    }

})
export default getTemporalCounselorAnswerSlice.reducer;

