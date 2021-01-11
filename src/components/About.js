import React, { Component } from "react";
class About extends Component{
    render(){
        return (
            <div className="about-box">
              <div className="card">
                <div className="card-body">
                  <h3 className="card-title">About Me</h3>                        
                <div className="row">                
                <div className="col-sm-4">
                  <img
                    src="assets/images/yigezu-img.png"
                    alt="Profile"
                    className="float-left mr-sm-3 img-fluid mb-3"
                  />
                </div>
                <div className="col-sm-8">
                  <p className="card-text">
                    An experienced full Stack, and SharePoint Developer with
                    Electronic Engineering and Physics background. I have hands
                    on experience working with the state of the art web
                    technologies such as HTML, CSS and JavaSctript has a client
                    side development toolsets. In addition, I have utilized the
                    popular and open source JavaScript libraries such as jQuery,
                    AngularJS, and ReactJS and CSS frameworks such as BootStrap,
                    ZURB Foundation and BULMA for archtecting and developing web
                    applications that consume data from remote servers.
                  </p>
                  <p className="card-text">
                    In the server side programming, I have been utilizing
                    JavaScript as a languge of choice to write Application
                    Programming Interfaces (APIs), Web servers and JavaScrip
                    codes that manipulates the file and the operating systems
                    using Node.js as runtime environment. On top of JavaScript,
                    I also have a working experiece writing server side codes
                    using the popular C# and PHP programming languges. Finally,
                    I have been extensively utilizing SQL, MySQL and MongoDB
                    database programs in designing databases and tables for web
                    applications.
                  </p>
                  <p className="card-text">For Detail see my resume: <a href="../assets/YigezuBirhane-Resume.pdf" target="_blank">Yigezu Birhane - Resume</a></p>
                </div>                                
                </div> 

              </div>
              </div>
            </div>
        )
    }
}
export default About