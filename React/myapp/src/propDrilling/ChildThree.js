import React from 'react'

export default function ChildThree(props) {
    function increase() {
        props.setCount(props.count + 1);
    }

    function decrease() {
        props.setCount(props.count - 1);
    }
  return (
    <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
    </div>
  )
}
