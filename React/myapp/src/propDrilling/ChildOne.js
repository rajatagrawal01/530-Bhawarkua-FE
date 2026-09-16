import ChildTwo from "./ChildTwo";
import { useState } from "react";

export default function ChildOne() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <ChildTwo count={count} setCount={setCount()}/>

            {/* <h1>Hello {props.name} </h1>
        <ChildTwo class={props.class} topic={props.topic}/> */}

        </div>
    )
}
