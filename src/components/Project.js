import React, { Component } from 'react';

class Project extends Component {
    render() {
        return (
            <div>
                <header className="page-header agency-page-2 bg-faded">
                    <div className="container">
                        <div className="header-content has-sticky-menu text-center">
                            <h1>Projects</h1>
                        </div>
                    </div>
                </header>

                <section id="about" className="big-section">
                    <div className="container">
                        <div className="row vcenter">
                            <div className="left-section">
                                <h4 className="section-title mb-3">Handful of things I've worked on</h4>
                                <ul className="text-black">
                                    <li>
                                       <p> - Football API (Phoenix / Elixir) - Project which currently serves
                                           hundreds of clients. Select and follow your premier league team.
                                           Anything / Everything about football.
                                       </p>
                                    </li>
                                    <li>
                                        <p>- Bot that will bring you the latest about your fav PremierLeague team.</p>
                                    </li>
                                    <li><p>- Twitter Trends (Mood Generator) </p></li>
                                    <li><p>- Alexa Skills (Ruby) </p></li>
                                    <li>
                                        <p>- Data Structure and Algorithms Visuals - Data structures is hard to grasp,
                                            my course helps you to understand the core in simpler and concise way possible </p>
                                    </li>
                                    <li><p>- Personal Website (ReactJS)</p> </li>
                                    <li><p>- KeepMeFiit (Rails)</p></li>
                                </ul>

                            </div>
                        </div>
                    </div>
                    {/*!-- / container --*/}
                </section>
                {/*!-- / about --*/}

                {/*<footer className="big bg-light">*/}
                {/*    <div className="container text-center">*/}
                {/*        <div className="row vcenter">*/}
                {/*            <div className="col-md-8 footer-left-area">*/}
                {/*                <p>© 2018 <span className="text-regular">MNML</span> BY <a href="https://kingstudio.ro"*/}
                {/*                                                                           target="_blank">KINGSTUDIO</a>.*/}
                {/*                </p>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4 social-icons footer-right-area">*/}
                {/*                <a href="#x"><i className="fab fa-facebook-f text-sm"></i></a>*/}
                {/*                <a href="#x"><i className="fab fa-twitter text-sm"></i></a>*/}
                {/*                <a href="#x"><i className="fab fa-instagram text-sm"></i></a>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</footer>*/}
            </div>
        );
    }
}

export default Project;
