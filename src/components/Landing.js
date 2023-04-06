import React, { Component } from 'react';
import ProfilePic from "../images/profile_pic.jpg";
import '../styelsheets/landing.css'


function Projects() {
    return (
        <div className="wrapper" style={{marginTop:'8px'}}>
            <div>
                Slack Weather Bot
                &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.833 6.248l-2.197-2.198 1.415-1.415 2.197 2.197c-.562.373-1.043.854-1.415 1.416zm8.167 2.752c0 .425-.084.828-.207 1.212-1.999.374-3.826 1.24-5.345 2.474-1.438-.605-2.448-2.028-2.448-3.686 0-2.209 1.791-4 4-4s4 1.791 4 4zm4 1v-2h-3.101c.066.323.101.658.101 1s-.035.677-.101 1h3.101zm-3.833-3.753l2.197-2.197-1.414-1.414-2.197 2.197c.561.372 1.042.853 1.414 1.414zm-3.167-2.146v-3.101h-2v3.101c.323-.066.658-.101 1-.101.342 0 .677.035 1 .101zm5 9.899c-4.065 0-8 2.883-8 9h1c0-5.442 3.392-8 7-8 3.673 0 7 2.606 7 8h1c0-6.123-3.965-9-8-9zm0-2c-5.046 0-10 3.661-10 11h1c0-6.724 4.476-10 9-10s9 3.257 9 10h1c0-7.382-5.017-11-10-11zm-10.167-.247l-2.196 2.197 1.414 1.414 2.197-2.197c-.561-.372-1.043-.853-1.415-1.414zm-.833-2.753c0-.342.035-.677.101-1h-3.101v2h3.101c-.066-.323-.101-.658-.101-1zm11 7c-3.176 0-6 2.205-6 7h1c0-4.111 2.264-6 5-6 2.607 0 5 1.747 5 6h1c0-4.831-2.875-7-6-7z"/></svg>
                {/*<p style={{textAlign:'centre',fontSize:'1.3rem'}}>Slack Weather Bot </p>*/}
                <br/><br/>
                Project description goes here.
            </div>
            <div>
                Property Index
                &nbsp;&nbsp;
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z"/></svg>
                <br/><br/>
                Project description goes here.
            </div>
            <div>
                Mood Checker
                <br/><br/>
                Project description goes here.
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.269 19.743l-11.945-11.945c-.557-.557-.842-1.33-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.376-1.537-3.723-1.537-.507 0-1.015.072-1.505.216l3.17 3.17c.344 1.589-1.959 3.918-3.567 3.567l-3.169-3.17c-.145.492-.218 1-.218 1.509 0 1.347.51 2.691 1.538 3.721 1.135 1.136 2.66 1.645 4.146 1.53.783-.06 1.557.226 2.113.783l11.946 11.944c.468.468 1.102.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.731-1.763zm-1.769 2.757c-.553 0-1-.448-1-1s.447-1 1-1c.553 0 1 .448 1 1s-.447 1-1 1zm-7.935-15.289l5.327-5.318c.584-.585 1.348-.878 2.113-.878.764 0 1.529.292 2.113.878.589.587.882 1.357.882 2.125 0 .764-.291 1.528-.873 2.11l-5.326 5.318-4.236-4.235zm-3.53 9.18l-5.227 5.185c-.227.23-.423.488-.574.774l-.301.58-2.1 1.07-.833-.834 1.025-2.146.58-.302c.286-.15.561-.329.79-.558l5.227-5.185 1.413 1.416z"/></svg>
                <br/><br/>
                Project description goes here.
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.914 2.741l15.557 15.556-4.243 4.243-15.556-15.557 4.242-4.242zm-.707-.707l-2.033-2.034-4.174 4.243 1.965 2.034 4.242-4.243zm12.821 21.119l4.972.847-.918-4.901-4.054 4.054zm-4.567-15.694l.389-.388.707.707.707-.707-.707-.707.707-.707.707.707.708-.708-.707-.706 2.121-2.121 2.121 2.121-4.631 4.631 1.393 1.393 6.024-6.024-4.908-4.95-6.045 6.045 1.414 1.414zm-4.949 9.193l-4.562 4.561-2.121-2.121.707-.708.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.707.707-.707.707.707.707-.707-.707-.706.319-.319-1.415-1.415-5.975 5.976 4.95 4.908 5.955-5.955-1.393-1.393zm9.934-11.349c.195-.195.195-.512 0-.707s-.512-.195-.707 0-.195.512 0 .707.512.196.707 0z"/></svg>
                <br/><br/>
                Project description goes here.
            </div>
            <div>
                Photography
                <br/><br/>
                Project description goes here.
            </div>
        </div>
    );
}

class Landing extends Component {
    render() {
        return (
            <div style={{margin:'auto',width:'80%',minHeight:'100px',overflow:'hidden',border:'3px solid none',padding:'20px'}}>
                <img src={ProfilePic} alt='' style={{borderRadius:'50%',width:'170px',display:'block',marginLeft:'auto',marginRight:'auto'}} />

                <div className="text-center" style={{margin:'30px 0'}}>
                    <h1 className="section-title">Raj Gurung</h1>
                    <h4 className="section-title" style={{marginTop:'50px'}}>Backend Engineer</h4>
                    <p className="section-title" style={{marginTop:'2px'}}>Ruby, Rails, PG SQL, Sidekiq, CI/CD, Observability, Performance, Scalability, Heroku, Team Lead/Player</p>
                </div>

                <div className="text-center" style={{margin:'60px 0'}}>
                    {/*https://iconmonstr.com/instagram-13-svg/*/}
                    <a href="https://www.linkedin.com/in/raj-gurung-06235862/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <a href="https://github.com/rajgurung" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/></svg>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>
                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z"/></svg>*/}
                </div>

                <div className="text-center" style={{margin:'70px auto 0 auto',background:'none',minHeight:'100px',overflow:'hidden'}}>
                    <h1 className="section-title">Projects</h1>
                    <Projects />
                </div>
            </div>
        );
    }
}

export default Landing;
