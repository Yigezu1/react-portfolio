import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
// import MediaQuery from 'react-responsive'
import PageNotFound from './components/PageNotFound'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

class App extends Component {     
    state = {      
      projects: [{
        id: 0,
        image: "assets/images/getogether.png",
        title: "GETogether",
        description: `GETogether is a state-of-the-art dynamic web application that allows users to create or search local events around them. GETogether is the newest site for meeting people around you in a very different way. We decided to connect people through common interests, not just silly bios like on apps and sites.`,
        doc: "https://github.com/Yigezu1/project2.git",
        demo: "http://project2gw.herokuapp.com/"
      },
      {
        id: 1,
        image: "/assets/images/wwta.png",
        title: "Worldwide Travel Assistant",
        description: "Business and leisure travel to many states or countries can be difficult if you aren’t equipped with the proper attire, or knowledge of specific holidays in that area. The ability to view this information before visiting the region can save the traveler time and effort through pre-planning.",
        doc: "https://github.com/Yigezu1/world-wide-travel-assistant.git",
        demo: "https://yigezu1.github.io/world-wide-travel-assistant/"
      },
      {
        id: 2,
        image: "/assets/images/wd.png",
        title: "Weather Dashboard",
        description: "In this app, when you inpute a city name into the inputbox and hit the search button, you will able to see the current and 5-day weather forcast for that specific city. The app stores the search history and upon loading you will able to see the last city you searched. If you click in one of the list of cities, you will be presented with the weather information to that specific city.",
        doc: "https://github.com/Yigezu1/weatherdashboard.git",
        demo: "https://yigezu1.github.io/weatherdashboard/"
      },
      {
        id: 3,
        image: "/assets/images/dp.png",
        title: "Work Day Scheduler",
        description: "This app is used to schedule work for a day between 9am - 5pm. Events can be saved in the browsers local storage and retrived later. It utilizes moments.js third party library to format the time. The color of the event changes based on whether it is passed, present or future.",
        doc: "https://github.com/Yigezu1/workdayscheduler.git",
        demo: "https://yigezu1.github.io/workdayscheduler/"
      },
      {
        id: 4,
        image: "/assets/images/profilegenerator.png",
        title: "Team Profile Generator ",
        description: "This app is a CLI app used to generate team profile. When running the app, you will be asked a series of questions about the employee type (Manager, Engineer or Intern) that you want to add as your team member. Once you choosed your employee type, then there will be other type specific information that you need to provide. If you done by providing all information regarding your employee you choosed to add, the last question will ask you if you want to keep on adding another employee to your team. If you choose yes, you will be presented with those employee type specific questions. If you choose no, the app will generate the html file for your team and exit.",
        doc: "https://github.com/Yigezu1/team_profile_generator.git",
        demo: ""
      },
      {
        id: 5,
        image: "/assets/images/burgerapp2.png",
        title: "Burger App",
        description: "This Burger application used MVC programming paradime and used to add/order a burger. The application a functionality to devour the burger when served and it moves the burger into the devoured list. The data/information persists as it is connected to mysql database. This application an example of fullstack web application.",
        doc: "https://github.com/Yigezu1/burger.git",
        demo: ""
      }]
    }
    
   
 

 
  render(){
    const projects  = this.state;

    let project   
      project = <Projects projects={projects}/>  
    return (
      <div className="app">
          <div className="flex-grid" >
            <div className="main-content">
              { <Navbar />}              
              <Switch>
              <Route exact path='/react-portfolio' component={Home} />
              <Route path='/react-portfolio/contact' component={Contact} />
              <Route path='/react-portfolio/about' component={About} />
              <Route path='/react-portfolio/projects' render={() => project}/>
              
              {/* use button / iframe */}
              <Route path='/github' component={({history}) => { 
                  history.replace("/react-portfolio");
                  window.location.href = 'https://www.github.com/yigezu1';
                  return null;
              }}/>
              <Route path='/linkedin' component={({history}) => { 
                  history.replace("/react-portfolio"); 
                  window.location.href = 'https://www.linkedin.com/in/yigezu-birhane-4951b3168/';
                  return null;
              }}/>
              <Route component={PageNotFound} />
              </Switch>               
              
            </div>
          </div>
          
      </div>
    );
  }
}

export default App;