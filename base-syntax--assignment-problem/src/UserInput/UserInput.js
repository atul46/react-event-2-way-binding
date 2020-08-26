import React from 'react';
const { Component } = require("react");


const userInput=(props)=>{
    const inputStyle={
        border : '2px solid red',
        width: '20%'
    };
    return <input style={inputStyle} type="text" onChange={props.changed} value={props.defaultName} />;
}

export default userInput;