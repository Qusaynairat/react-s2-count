import { useState } from "react";
import style from "./Counter.module.css";
function Counter(/*{count,children}*/) {    
    const [count,countstate]=useState(0);

    const countChange=()=>{
        countstate(count+1);
    }
    return (
        <>
        <button onClick={countChange} className={style.btn}>Count {count}</button>

        {/* <div className={style.text}>
        {count}
        {children}
        </div> */}

        </>
        );
}

export default Counter