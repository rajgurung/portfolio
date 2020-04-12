import React, { Component } from 'react';
import data from '../data/about.js';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-content'>
          <img className="img-responsive" src="images/main_bg.jpg" alt="" />
          {/*<h1><Fade bottom cascade>About.</Fade></h1>*/}
          {/*<Fade bottom>*/}
            <p>{data.body}</p>
          {/*</Fade>*/}
        </div>
        {/*{data.ShowAboutImage ? <img src={data.aboutImage} alt='about iamge'></img> : null}*/}
      </div>
    );
  }
}

export default About;
