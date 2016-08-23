import React, {Component} from "react";

class About extends Component {
  render() {
    return (
      <div className="col s12 m7" style={{marginTop: "10%"}}>
    <div className="card horizontal">
      <div className="card-image">
        <img src="/user.png" />
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <span className="card-title">Hi! Zohaib Ijaz here..</span>
          <p>I am electrical engineer. My major subjects are related to software and computer engineering. I have keen interest in knowing new technologies, languages and 
          apply them to create new things. Currently I am working as a team lead in QC technologies and there are 6 Members in my team. 
          Most of the work I am doing is in python (Flask, SqlAlchemy etc.) but I also work as a front-end developer (Angular,React, Material Design, gulp, webpack etc.).

I love javascript and my most of answers on Stackoverflow are in javascript. I love helping people whether it is coding or real brutal life.
Here is my profile on Stackoverflow <a href="http://stackoverflow.com/users/5567387/zohaib-ijaz" target="_blank"> Zohaib Ijaz</a>.

I also love git and I've given some talks on git in QC Technologies, Lahore.</p>
        </div>
        <div className="card-action" >
          <a href="https://www.facebook.com/zohaibijaz786" target="_blank"><i className="medium zmdi zmdi-facebook indigo-text text-darken-1"></i></a>
          <a href="https://github.com/mzohaibqc" target="_blank"><i className="medium zmdi zmdi-github black-text"></i></a>
          <a href="https://www.linkedin.com/in/zohaib-ijaz-7a657a58?trk=hp-identity-name" target="_blank"><i className="medium zmdi zmdi-linkedin indigo-text text-lighten-1"></i></a>
          <a href="http://stackoverflow.com/users/5567387/zohaib-ijaz" target="_blank"><i className="medium zmdi zmdi-stackoverflow indigo-text text-lighten-1" style={{color: "orange"}}></i></a>
          
        </div>
      </div>
    </div>
  </div>
    );
  }
}

export default About;
