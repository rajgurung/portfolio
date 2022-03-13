import React, { Component } from 'react';
import data from '../data/about.js';

class About extends Component {
  render() {
    return (
        <div>
            <header className="page-header agency-page-2 bg-faded">
                <div className="container">
                    <div className="header-content has-sticky-menu text-center">
                        <h1>ABOUT ME</h1>
                    </div>
                </div>
            </header>

            <section id="about" className="big-section">
                <div className="container">
                    <div className="row vcenter">
                        <div className="col-md-12 left-section">
                            <h4 className="section-title mb-3">Hi, I am Raj Gurung.</h4>
                            <p>
                                I have been working as a Software Engineer for a decade.
                                During this time I have highly specialised working on Backend APIs.
                                I love Ruby/Rails, PostgreSQL and Background-Jobs.
                                I take alerting and monitoring to be crucial metrics to measure the reliability of solutions.
                                I like to keep my code by design; modular, maintainable and scalable.
                                Data Driven engineer to help you drive your product accelerate above and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                {/*!-- / container --*/}
            </section>
            {/*!-- / about --*/}
        </div>
    );
  }
}

export default About;
