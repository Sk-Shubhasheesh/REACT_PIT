import React from "react";

class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ "border": "1px solid black" }}>
                <h1>Profile class based Component</h1>
                <h3>Name:{this.props.name}</h3>
                <h3>Address: {this.props.address}</h3>
                <h3>Email: {this.props.email}</h3>
            </div>
        )
    }
}

export default ProfileClass;