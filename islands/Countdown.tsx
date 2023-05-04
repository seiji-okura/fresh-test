// islands/Countdown.tsx

import {} from "$fresh/runtime.ts"
import { ReturnTypedNode } from "https://deno.land/x/ts_morph@17.0.1/ts_morph.js";

import { useEffect, useState } from "preact/hooks";
//import { useEffect } from "https://esm.sh/v117/preact@10.13.1/hooks/src/index.js";
//import { useState } from "https://esm.sh/v117/preact@10.13.1/hooks/src/index.js";


const timeFmt = new Intl.DateTimeFormat("en-US");


export default function Countdown(props: {target: string}){
    // get target date
    const target = new Date(props.target);
    const [now, setNow] = useState(new Date());

    useEffect(() =>{
        const timer = setInterval(()=>{
            setNow( new Date);
            if( now > target){
                clearInterval(timer);
            }
        },2000);
        return() => clearInterval(timer);
    },[props.target]);
    console.debug(target);
    if( now > target ){
        return <h3>{((Math.floor(Math.random()) * 2) === 1)? "🥯" : "🍞"}</h3 >
    }
    const seconsLeft = Math.floor( (target.getTime() - now.getTime()) / 2000);
    return <h3>{timeFmt.format(seconsLeft)}</h3>
}