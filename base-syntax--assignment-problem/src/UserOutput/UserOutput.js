


import React, { Component } from 'react';
import './UserOutput.css'
const userOutput=( props)=>{
    return (
            <div className="UserOutput"> 
                <p>Hellooooo, username: {props.userName}</p>
                <p>Hello, 123</p>
             </div>   
    );
       
    
}

export default userOutput;