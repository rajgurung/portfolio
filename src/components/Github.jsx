import React, { Component } from 'react';

class Github extends Component {
    render() {
        return (
            <header className="p-0 video-wrapper header-slider header-agency">
                <div className="overlay"></div>
                <div className="slide one slider-content">
                    <div className="container">
                        <div className="header-content text-center">
                            <h1>My Commits in Github</h1>
                            <h4>1000 commits</h4>
                        </div>
                    </div>{/*< / container >*/}
                </div>{/*< / slide >*/}
            </header>
        );
    }
}

export default Github;
