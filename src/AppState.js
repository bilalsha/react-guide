import React, { Component } from 'react';
import './App.css'
import UserOutput from './Components/UserOutput/UserOutput'
import UserInput from './Components/UserInput/UserInput'

class AppState extends Component {
    state = { 
        username: 'Udemy'
     }

    changeUsernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    render() { 
        return ( 
            <div className="App">
                <h1>Udemy Maximilian Assignement 1</h1>
                <p>I find two way binding challanging and by watch the tutorial again I overcome this problem</p>
                <UserInput changed={this.changeUsernameHandler} username={this.state.username}></UserInput>
                <UserOutput username = {this.state.username}></UserOutput>
                <UserOutput username = {this.state.username}></UserOutput>
            </div>
         );
    }
}
 
export default AppState;