import ChildThree from "./ChildThree"
export default function ChildTwo(props) {
  return (
    <div>
        <p>This is your counting {props.count}</p>
        {/* <ChildThree setcount={props.setcount()} /> */}
    </div>
  )
}
