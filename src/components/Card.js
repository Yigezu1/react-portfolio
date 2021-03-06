import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

class Card extends Component{
    constructor(props){
        super(props)
        this.onDemoClicked = this.onDemoClicked.bind(this)
        this.onDocClicked = this.onDocClicked.bind(this)
        this.onShowClicked = this.onShowClicked.bind(this)
        
        this.state = {
            showDetails : false
        }
    }

    componentDidMount() {
       
    }
    
    componentWillUnmount() {
        //window.removeEventListener('click', this.onDetailsClicked.bind(this));
    }

    onDemoClicked(){
        const url = this.props.project.demo
        window.open(url)

    }

    onDocClicked(){
        const url = this.props.project.doc
        window.open(url)
    }
    
    onShowClicked(){
        this.setState(prevState => {
            return {showDetails: !prevState.showDetails}
        })
    }
    onHideClicked(){
        this.setState(prevState => {
            return {showDetails: !prevState.showDetails}
        })
    }
    render(){
        const {title, image, description, doc, demo} = this.props.project
        const {showDetails} = this.state
        // console.log("image: ", image)
        // console.log(showDetails, this.props)
        const disabledDoc = doc === "" ? " disabled" : ""
        const disabledDemo = demo === "" ? " disabled" : ""
        
        return(
            <div className="card" >
                <img src={image} className="card-img-top" alt="..." style={{ height: "400px", maxWidth: "100%", objectFit: "cover"}}/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>                    
                    <button className={"btn btn-outline-dark m-1 p-1" + disabledDoc } onClick={() => this.onDocClicked()} >Doc</button>
                    <button className={"btn btn-outline-dark m-1 p-1" + disabledDemo } onClick={() => this.onDemoClicked()}>Demo</button>
                    { showDetails ? <button className="btn btn-outline-dark m-1 p-1" onClick={() =>this.onHideClicked()}>Less</button> : <button className="btn btn-outline-dark m-1 p-1" onClick={() =>this.onShowClicked()}>More</button>}
                    { showDetails ? <p className="card-text">{description}</p> : null }
                </div>
            </div>
        )
    }
}

export default withRouter(Card)