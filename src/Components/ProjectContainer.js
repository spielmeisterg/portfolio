import React, {Component} from "react"
import "./style/projects.css"
import {projects} from "./data"
import Project from "./Project"

class ProjectContainer extends Component{
    render(){
        return(
            <div className="project-container">
                <div className="project-list">
                    <Project name={projects[0].name} description={projects[0].description} link={projects[0].link} image={projects[0].image} />
                    <Project name={projects[1].name} description={projects[1].description} link={projects[1].link} image={projects[1].image} />
                </div>
            </div>
        )
    }
}

export default ProjectContainer