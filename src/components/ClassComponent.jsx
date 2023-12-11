import React,{Component} from "react";

export default class ClassComponent extends Component{
    constructor(){
        super();
        this.state = {
            name:0
        }
    }
    // componentDidUpdate(preProps, preState,snapshot){
    //     console.warn("componentDidUpdated",preState, this.state.name);

    // }   
    shouldComponentUpdate(){
        console.warn("componentDidUpdated", this.state.name);
        return true;
    }

    render(){
        return(
            <>
                <h1>{this.state.name}</h1>
                <button onClick={()=>this.setState({name:this.state.name+1})}>Update Data</button>
            </>
        )
    }
}