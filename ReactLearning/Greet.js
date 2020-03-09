import React from 'react'

// function Greet()
// {
//     return <h1>Hello Shubhi from function</h1>
// }

//const Greet=()=><h1>Hello Shubhi from ES6 arrow syntax</h1>

//using props
const Greet = (props) => {
console.log(props)
return <div>
    <h1>
        Hello {props.name} is {props.quality}
        </h1>
         {props.children}
</div>
}

export default Greet