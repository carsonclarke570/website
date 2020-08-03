import React from 'react';

class Experience extends React.Component {

    render() {
        return (
            <section id="experience" class="section section-experience">
                <div class="animate-up">
                    <h2 class="section-title">Work Experience</h2>
            
                    <div class="timeline">
                        <div class="timeline-bar"></div>
                        <div class="timeline-inner clearfix">
                                <div class="timeline-box timeline-box-left">
                                <span class="dot"></span>
            
                                <div class="timeline-box-inner animate-right">
                                    <span class="arrow"></span>
            
                                    <div class="date">06/2020 - Present</div>
                                    <h3>AMAZON</h3>
                                    <h4>Software Development Engineer Intern</h4>
            
                                    <p>
                                        <li>Worked as part of the Amazon Redshift team under AWS</li>
                                        <li>Responsible for a project in augmenting and improving Redshift's ingestion capabilities</li>
                                    </p>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-right">
                                <span class="dot"></span>
            
                                <div class="timeline-box-inner animate-left">
                                    <span class="arrow"></span>
            
                                    <div class="date">01/2020 - 05/2020</div>
                                    <h3>ROCHESTER INSITUTE OF TECHNOLOGY</h3>
                                    <h4>Teaching Assistant</h4>
            
                                    <ul>
                                        <li>Responsible for faciliatating laboratory experiments for Interface 
                                        and Digital Electronics, an upper-level embedded systems course.</li>
                                        <li>Reorganized the laboratory content for Rochester's transition to online 
                                        classes due to COVID-19.</li>
                                        <li>Developed software to facilitate this transition using Matlab and 
                                        Python.</li>
                                        <li>Received the department's Student Teaching Award</li> 
                                    </ul>
                                </div>
                            </div>

                            <div class="timeline-box timeline-box-left">
                                <span class="dot"></span>
            
                                <div class="timeline-box-inner animate-right">
                                    <span class="arrow"></span>
            
                                    <div class="date">09/2019 - 12/2019</div>
                                    <h3>PARSONS CORPORATION</h3>
                                    <h4>Software Engineer Intern</h4>
            
                                    <ul>
                                        <li>
                                            Worked on mission-critical software as a contractor for
                                            government organizations.
                                        </li>
                                        <li>
                                            Developed Python software to support the results of 
                                            reverse-engineering and vulnerability research as part of
                                            an Agile software development team
                                        </li>
                                    </ul>
                                </div>
                            </div>
            
                            <div class="timeline-box timeline-box-right">
                                <span class="dot"></span>
            
                                <div class="timeline-box-inner animate-left">
                                    <span class="arrow"></span>
            
                                    <div class="date">06/2019 - 08/2019</div>
                                    <h3>COGO LABS</h3>
                                    <h4>Platform Engineer Intern</h4>
            
                                    <ul>
                                        <li>
                                            Implemented backend API features using Golang in various Docker and 
                                            Kubernetes-based distributed systems.
                                        </li>
                                    </ul>
                                </div>
                            </div>
            
                            <div class="timeline-box timeline-box-left">
                                <span class="dot"></span>
            
                                <div class="timeline-box-inner animate-right">
                                    <span class="arrow"></span>
            
                                    <div class="date">06/2018 - 12/2018</div>
                                    <h3>PARSONS CORPORATION</h3>
                                    <h4>Computer Engineer Intern</h4>
            
                                    <ul>
                                        <li>Researched network functionality and metadata extraction capabilities.</li>
                                        <li>Contributed to the team codebase in Golang and Python.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Experience;
