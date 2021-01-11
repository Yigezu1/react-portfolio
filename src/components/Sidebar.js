import React, { Component } from "react"
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    constructor(props){
        super(props)
        this.swithchLangHandler = this.swithchLangHandler.bind(this)
    }

    swithchLangHandler(e){
        const lang = e.target.firstChild.data
        this.props.onLanguageClicked(lang)
        // console.log(lang)
        // console.log(e.target.dataset.id)
        // console.log(e.currentTarget.dataset.id)
    }
    render(){
        return (
            <div className="sidebar">
                    <nav className="social-media-icon">
                        <ul className="social-media-icon__nav">
                            <li className="social-media-icon__item">
                                <Link to={"/github"}>
                                <i class="fa fa-github-square fa-2x ml-sm-5"aria-hidden="true"></i>
                                
                                </Link>
                            </li>
                            <li className="social-media-icon__item">
                                <Link to="/linkedin">
                                <i class="fa fa-linkedin-square fa-2x ml-sm-5"aria-hidden="true"></i>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                   
            </div>
        )
    }
}

export default Sidebar