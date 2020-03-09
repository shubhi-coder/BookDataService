import React,{Component} from 'react'

class Welcome extends Component{

    // render()
    // {
    //     return <h1>Class Component</h1>
    // }

    // using props in class component
     render()
    {
    return <h1>Class Component {this.props.name}  is {this.props.quality}</h1>
    }
}
export default Welcome;