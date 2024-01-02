/**
 * 전체 저장소의 상태가 작성된다
 */

import { configureStore } from "@reduxjs/toolkit";
import reduxExample from "../reducer/reduxExample";
export const store = configureStore({
  reducer: {
    //이곳의 이름이 selector에서 구별되는 이름으로 사용됨
    reduxExample
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;