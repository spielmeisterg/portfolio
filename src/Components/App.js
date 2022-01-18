import React, {Component} from "react"
import Header from "./Header"
import ProjectContainer from "./ProjectContainer"

class App extends Component{

  render(){
    return (
      <React.Fragment>
        <Header />
        <ProjectContainer />
      </React.Fragment>
    );
  }
}

export default App;
