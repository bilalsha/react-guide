import React, { useState } from 'react';
import './App.css';
import UserOutput from './Components/UserOutput/UserOutput';
import UserInput from './Components/UserInput/UserInput';

const App = (props) => {
	const [ usernameState, setUsernameState ] = useState({
		username: 'udemy hooks'
	});

	const changeUsernameHandler = (event) => {
		setUsernameState({
			username: event.target.value
		});
	};

	return (
		<div className="App">
			<h1>Tutorial 1</h1>
			<p>I find two way binding challanging and by watch the tutorial again I overcome this problem</p>
			<UserInput changed={changeUsernameHandler} username={usernameState.username} />
			<UserOutput username={usernameState.username} />
			<UserOutput username={usernameState.username} />
		</div>
	);
};

export default App;
