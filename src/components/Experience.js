import React, { Component } from 'react';
import IndeedFlexLogo from '../images/indeed-flex.png'
import SyftLogo from '../images/syft-logo.png'
import AiLogo from '../images/ai-logo.png'
// import data from '../data/about.js';

const PaddingText = {
    paddingTop: 15,
    paddingLeft: 15
}

class Experience extends Component {
    render() {
        return (
            <div>
                <header className="page-header agency-page-2 bg-faded">
                    <div className="container">
                        <div className="header-content has-sticky-menu text-center">
                            <h1>EXPERIENCE</h1>
                        </div>
                    </div>
                </header>

                <section id="about" className="big-section">
                    <div className="container">
                        <div className="row vcenter">
                            <div className="col-md-12 left-section">
                                <div className="row" style={{backgroundColor: 'none', textAlign: 'center', margin: '1rem'}}>
                                    <div className="d-inline-block logo">
                                        <img src={IndeedFlexLogo} alt='Indeed Flex' />
                                    </div>
                                    <div className="d-inline-block" style={PaddingText}>
                                        <ul>
                                            <li>Here at Indeed Flex we are a growing team that continues to have an impact on the future of work, by seamlessly uniting employers and jobseekers.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row" style={{backgroundColor: 'none', paddingTop: 20, paddingBottom: 20}}>
                                    <div className="d-inline-block logo">
                                        <img src={SyftLogo} alt='Syft' />
                                    </div>
                                    <div className="d-inline-block" style={PaddingText}>
                                        <ul>
                                            <li>Startup company that went on to become the top digital recruitment company.</li>
                                            <li>Startup company that went on to become the top digital recruitment company.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row" style={{backgroundColor: 'none', paddingTop: 20, paddingBottom: 20}}>
                                    <div className="d-inline-block logo">
                                        <img src={AiLogo} alt='ai' />
                                    </div>
                                    <div className="d-inline-block" style={PaddingText}>
                                        <ul>
                                            <li>Startup company that went on to become the top digital recruitment company.</li>
                                            <li>Startup company that went on to become the top digital recruitment company.</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            {/*<div className="col-md-6 right-section">*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    {/*!-- / container --*/}
                </section>
                {/*!-- / about --*/}
            </div>
        );
    }
}

export default Experience;
