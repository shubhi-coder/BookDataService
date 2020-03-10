import React,{Component} from 'react'

class Message extends Component{

    // render()
    // {
    //     return <h1>Class Component</h1>
    // }

    // using props in class component
    constructor()
    {
        super()
        this.state={
            message:'welcome visitor'
        }
    }
    changeMessage(){
        this.setState({//used for altering  the state of the object
            message:'Thanks'
        })
    }
     render()
    {
        return(
            <div>
                        <h1>Class Component {this.state.message} </h1>
                        <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
         
    }

}
export default Message;