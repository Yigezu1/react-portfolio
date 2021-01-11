import React, {Component} from 'react';
import SideBar from "./Sidebar"

class Home extends Component{
    render(){
        return(
            <div className="home-container">
                <h2 className="text-white "> I'm Yigezu Birhane.</h2>
                <h4 className="text-info">Full Stack Developer</h4>
                <SideBar />
            </div>
        )
    }
}

export default Home