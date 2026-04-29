import {Component} from "react";
class Message extends Component {
    //initial state
    constructor()
    {
        super()
        this.state={message:"unmute"}
    }
    //change state is userdefined
    changeMessage(){

        this.setState(
            {message:"mute"}
        )

    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>click me</button>   
            </div>
        )
    }
}
export default Message;