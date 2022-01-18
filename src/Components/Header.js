import React,{Component} from "react"

class Header extends Component{
    constructor(){
        super()
        this.state = {am: "Ian Speelman"}
    }
    componentDidMount(){
        const amArray = ["Ian Speelman", "a Developer", "awesome", "the best"]
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
            <h1>Hi, i am {this.state.am}</h1>
        )
    }
}


export default Header