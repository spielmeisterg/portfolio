import React, {Component} from "react"

class Project extends Component{
    render(){
        return(
            <div className="item">
                <img src={this.props.image} alt={this.props.name} />
                <div>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.description}</p>
                    <a href={this.props.link}>View project here</a>
                </div>
            </div>

        )
    }
}

export default Project