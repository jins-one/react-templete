import { ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getListBucket } from "../../redux/reducer/reduxExample";

export default function Home(): ReactElement {
    const dispatch = useAppDispatch();
    const res = useAppSelector(state=>state.reduxExample.res)
    function test(){
        dispatch(getListBucket({data:1}));
        console.log(res)
    }    
    return (
        <div>
            home 입니다
        </div>
    )
}