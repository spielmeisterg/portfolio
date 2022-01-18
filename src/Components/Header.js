import React,{Component} from "react"
import {amArray} from "./data"
import "./style/header.css"

class Header extends Component{
    constructor(){
        super()
        this.state = {am: "Ian Speelman"}
    }
    componentDidMount(){
        let i = 0
        setInterval( ()=> {
            this.setState({am: amArray[i]})
            if(i < amArray.length-1){
                i++
            }
            else{
                i = 0
            }
        },3000)
    }
    render(){
        return(
            <div className="component-container">
                <h1>Hi, i am <span>{this.state.am}</span></h1>
            </div>
        )
    }
}


export default Header