//Event Handling
import React from 'react'

function FunctionClick() {
//function within a function
    function clickHandler()
    {
        console.log("Button clicked");
    }
    return (
        <div>
            <button onClick={clickHandler}>Click</button>         
      {/* <button>onClick={clickHandler()}</button> */}
       {/* This will call the function even when we dont click the button on UI. Event handler is a function and not a function call*/}
        </div>
    )
}

export default FunctionClick
