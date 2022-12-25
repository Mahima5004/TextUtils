import { Component }from "react";
class State extends Component{
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
    constructor(){
        super()
        this.state={
            message: 'Hello User'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }
}
export default State