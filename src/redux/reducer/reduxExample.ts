import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getListBucket = createAsyncThunk(
    // action 이름이 고유해야함
    "api/getlist",
    async ({ data }: { data: number }, { rejectWithValue }) => {
        // const res = await lockMindDiaryService(diaryId)
        // return res;
        return false;
    }
);
interface responseWrapper {
    res: boolean,
    isLoading: boolean;
}
export const initialState: responseWrapper = {
    res: false,
    isLoading: true,
};
const slice = createSlice({
    name: "getlist",
    initialState,
    reducers: {
        setRes(state, action: PayloadAction<boolean>) {
            state.res = action.payload;
            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getListBucket.pending, (state, action) => {
            console.log('pending');
            state.isLoading = true;
            return state;
        })
            .addCase(getListBucket.fulfilled, (state, action) => {
                console.log('lock fulfilled');
                state.res = action.payload;
                state.isLoading = false;
                return state;
            })
            .addCase(getListBucket.rejected, (state, action) => {
                console.log('rejected');
                state.res = false;
                state.isLoading = false;
                return state;
            })
    }

})
export const { setRes } = slice.actions;
export default slice.reducer;

