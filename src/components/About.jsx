import React, { Component } from 'react';
import ProfilePic from "../images/profile_pic.jpg";
// import data from '../data/about.js';

class About extends Component {
  render() {
    return (
        <div style={{margin:'auto',width:'80%',minHeight:'100px',overflow:'hidden',border:'3px solid none',padding:'20px'}}>
            <img src={ProfilePic} alt='' style={{borderRadius:'50%',width:'170px',display:'block',marginLeft:'auto',marginRight:'auto'}} />
        </div>
    );
  }
}

export default About;
