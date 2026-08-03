export default function Greet(props) {
  return (
    <div>
        <h1>Hello {props.naam}</h1>
        <h1>You are attending {props.course} classes</h1>
        <h1>At {props.campus} Campus</h1>
        <img src={props.photo}/>
        <hr/>
    </div>
  )
}
// props={naam,course,campus}

// import StudentName from "./StudentName";

// export default function Greet({course, campus }) {
//     return (
//         <div>
//             <StudentName name="Nikita" age="99" mob="99999999999" />
//             <h1>You are attending {course} classes</h1>
//             <h1>At {campus} Campus</h1>
//             <hr/>
//         </div>
//     )
// }
