//Ref powerful
//wants access the inputs
//does not for two may mapping, do manually for updating the things

import React from 'react';

class Search2 extends React.Component{
    inputRef = React.createRef();

    handleClick = ()=>{
        const value =this.inputRef.current.value;
        alert( `the value of the input is ${value}`);
    };

    render(){
        
        return (
            <div>
        <input ref={this.inputRef}  type='text' name='username' placeholder='enter username'/>
        <button onClick={this.handleClick}>click me</button>
        </div>
        );
    }



}

export default Search2;