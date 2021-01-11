import React from 'react'
import Card from "./Card"

function Projects(props) {    
        return (
            <div className="project-container  container-fluid">
                <div className="row">               
                    {props.projects.projects.map((project, index) => <div key={index} className="col-xs-4 col-md-4 mt-4"> <Card key={index} project={project} /> </div>)}
                    
                </div> 
            </div>
        )
    }


export default Projects