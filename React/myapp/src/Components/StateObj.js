import React, { useState } from 'react'

export default function StateObj() {
    const [user,setUser]=useState({
        name:"Rajat",
        age:30,
        address:"Indore"
    })
    const changeName=()=>{
        setUser({
            ...user,
            name:"Shubhangi"
        })
    }
    const changeAge=(e)=>{
        setUser({
            ...user,
            age:e.target.value
        })
    }
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name:{user.name}</p>
      <p>Age: {user.age}</p>
      <p>Address:{user.address}</p>
      <button onClick={changeName}>Change Name</button>
      <input placeholder='Enter Age' onChange={changeAge}/>
    </div>
  )
}
