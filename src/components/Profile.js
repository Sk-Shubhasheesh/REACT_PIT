import React from 'react'

export default function Profile({name, address, email}) {
    return (
        <div style={{ "border": "1px solid black" }}>
            <h1>Profile functional Component</h1>
            <h3>Name: {name}</h3>
            <h3>Address: {address}</h3>
            <h3>Email: {email}</h3>
        </div>
    )
}
