import React, { Component } from 'react'

class Home extends Component {
    render() {
        return (
        <>
        <h1>Home Component</h1>
        <h3>Name is: {this.props.name}</h3>
        <h4>Age is: {this.props.age}</h4>
        </>
        );
    }
}

export default Home;
