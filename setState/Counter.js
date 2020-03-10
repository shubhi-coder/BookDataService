import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
                count:0
        }
    }  
    
    increment()
    {
        // this.state.count=this.state.count+1 this will only increment cntr in the logs
        this.setState(
            {
            count: this.state.count+1
        },
         ()=>{console.log('Callback value', this.state.count)
        }
        )
        //console.log(this.state.count)
    }
    render() {
        return (
            <div>
                Count-{this.state.count}
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
        );
    }
}

export default Counter
