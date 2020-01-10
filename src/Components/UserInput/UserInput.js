import React from 'react';

const userInput = props => {
    const style = {
        font: 'inherit',
        padding: '8px'
    }

    return ( 
        <div>
            <input style={style} type="text" onChange={props.changed} value={props.username} />
        </div>
    );
}
 
export default userInput;