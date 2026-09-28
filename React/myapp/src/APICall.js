import React, { useEffect, useState } from 'react'

export default function APICall() {
    const [users, setUsers] = useState([])


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err) )
    }, [])
    console.log(users);

    return (
        <div>
                
        </div>
    )
}
