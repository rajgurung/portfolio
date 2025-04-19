import React from 'react';
import ProfilePic from "../images/profile_pic.jpg";
import '../styelsheets/landing.css';
import BlogList from '../components/BlogList'; // Adjust path if needed


export default function Landing() {
    return (
        <div style={{ margin: 'auto', width: '80%', minHeight: '100px', overflow: 'hidden', border: '3px solid none', padding: '20px' }}>

            {/* Profile Picture */}
            <img
                src={ProfilePic}
                alt="Raj Gurung"
                style={{ borderRadius: '50%', width: '170px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
            />

            {/* Name and Title */}
            <div className="text-center" style={{ margin: '30px 0' }}>
                <h1 className="section-title">Raj Gurung</h1>
                <h4 className="section-title" style={{ marginTop: '50px' }}>Backend Engineer</h4>
                <p className="section-title" style={{ marginTop: '2px' }}>
                    Ruby, Rails, PG SQL, Sidekiq, CI/CD, Observability, Performance, Scalability, Heroku, Team Lead/Player
                </p>
            </div>

            {/* Social Links */}
            <div className="text-center" style={{ margin: '60px 0' }}>
                <a href="https://www.linkedin.com/in/raj-gurung-06235862/" target="_blank" rel="noreferrer">
                    {/* LinkedIn */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;

                <a href="https://github.com/rajgurung" target="_blank" rel="noreferrer">
                    {/* GitHub */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                    </svg>
                </a>
            </div>

            {/* Blog Section */}
            <section className="mt-5 pt-5 border-top w-100">
                <div className="d-flex justify-content-center">
                    <div className="text-center" style={{ margin: '30px 0' }} >
                        <BlogList />
                    </div>
                </div>
            </section>
        </div>
    );
}
