//event using 
//limited ,simpler,performant

import React from 'react';

class Search3 extends React.Component{
    handleKeyDown = e=>{
        if(e.keyCode ===13){
        const value = e.target.value;

        alert(`The value of the inputfield is ${value}`);
    }
};

    

    render(){
        
        return (
            <div>
        <input  onKeyDown={this.handleKeyDown} type='text' name='username' placeholder='enter username'/>
        
        </div>
        );
    }



}

export default Search3;