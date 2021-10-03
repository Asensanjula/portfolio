import React from 'react';
import './experience.scss';

function Experience(props) {
    return (
        <div className="experience" id="experience">
            <div className="left">
                <h2><span>My Journey</span></h2>
                <div className="work_exp">
                    <div className="item">
                        <div className="item_img">
                            <img src={process.env.PUBLIC_URL + "/assets/company/mobitelLogo.png"} alt=""/>
                        </div>

                        <div className="item_desc">
                            <h4>Senior Software Engineer</h4>
                            <h6>Jan 2020 - Present</h6>
                        </div>

                    </div>
                    <div className="item">
                        <div className="item_img">
                        <img src={process.env.PUBLIC_URL + "/assets/company/cgLogo.png"} alt=""/>
                        </div>
                        <div className="item_desc">
                            <h4>Software Engineer</h4>
                            <h6>Jan 2018 - Jan 2020</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_img">
                            <img src={process.env.PUBLIC_URL + "/assets/company/lsfLogo.png"} alt=""/>
                        </div>
                        <div className="item_desc">
                            <h4>Intern - Software Engineer</h4>
                            <h6>Sept 2016 - Jan 2017</h6>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item_img">
                            <img  src={process.env.PUBLIC_URL + "/assets/company/fyraLogo.jpg"} alt=""/>
                        </div>
                        <div className="item_desc">
                            <h4>Co-Founder | Fyra.LK</h4>
                            <h6>Online Market Place</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="title">
                    <h2>Project Experience</h2>
                </div>

                <div className="projects">
                    <div className="projectCard">
                        <div className="projectName">
                            <h6>eChanneling UI Revamp</h6>
                        </div>
                        <div className="projectDesc">
                            <div className="para">
                                <p> Re design and implement the  eChanneling website. So users can have efficient and user friendly experience
                                </p>
                            </div>
                            <div className="tech">
                                <label>React.js |Redux Saga | React Boostrap | FontAwesome</label>
                            </div>
                        </div>
                    </div>

                    <div className="projectCard">
                        <div className="projectName">
                            <h6>University Admission | UGC</h6>
                        </div>
                        <div className="projectDesc">
                            <div className="para">
                                <p> Automate the student registration for government universities in SriLanka and
                                    auotomate the selection process for admin panel in UNIVERSITY GRANTS COMMISSION in
                                    Srilanka.
                                </p>
                            </div>
                            <div className="tech">
                                <label>React.js |Redux Saga | React Boostrap | Spring Boot | My Sql</label>
                            </div>
                        </div>
                    </div>

                    <div className="projectCard">
                        <div className="projectName">
                            <h6>Grade 6 Admission | MOE</h6>
                        </div>
                        <div className="projectDesc">
                            <div className="para">
                                <p> This projects facilitate the student apply for new school who pass the Grade 5
                                    Scholarship Examination and run the selection process.
                                </p>
                            </div>
                            <div className="tech">
                                <label>React.js |Redux Saga | React Boostrap | Spring Boot | My Sql</label>
                            </div>
                        </div>
                    </div>

                    <div className="projectCard">
                        <div className="projectName">
                            <h6>TravelBox Platform - CodeGen</h6>
                        </div>
                        <div className="projectDesc">
                            <div className="para">
                                <p>TravelBox is the main product of Codegen and it is a system of reservations, sales and administrations. web based platform for tour operators , airlines, hotel groups and cruise lines.
                                </p>
                            </div>
                            <div className="tech">
                                <label>Java | Rest | Oracle DB | Elastic Search</label>
                            </div>
                        </div>
                    </div>

                    <div className="projectCard">
                        <div className="projectName">
                            <h6>Optimized video conferencing System -FYP</h6>
                        </div>
                        <div className="projectDesc">
                            <div className="para">
                                <p>A video conferencing system which can be used for multiparty video conferencing, by
                                    using WebRTC technologies.</p>
                            </div>
                            <div className="tech">
                                <label>WebRTC | Jitsi MS | JAVA | React</label>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Experience;