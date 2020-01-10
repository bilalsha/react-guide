import React from 'react';
import './UserOutput.css'

const userOuput = props => {
    return (
        <div className="UserOutput">
            <p>I am paragraph 1, {props.username}</p>
            <p>I am paragraph 2, {props.username}</p>
        </div>
    );
}
 
export default userOuput;