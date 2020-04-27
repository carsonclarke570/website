import React from 'react';

import pdf from '../files/resume.pdf';

class Profile extends React.Component {

    render() {
        return (
            <section id="about" class="section section-about">
                <div class="animate-up">
                    <div class="section-box">
                        <div class="profile">
                            <div class="row">
                                <div class="col-xs-5">
                                    <div class="profile-photo"><img src="img/uploads/rs-photo-v1.jpg" alt="Robert Smith"/></div>
                                </div>
                                <div class="col-xs-7">
                                    <div class="profile-info">
                                        <div class="profile-preword"><span>Hello</span></div>
                                        <h1 class="profile-title"><span>I'm</span> Carson Clarke-Magrab</h1>
            
                                        <h2 class="profile-position">Software Engineer</h2>
                                    </div>
                                    <ul class="profile-list">
                                        <li class="clearfix">
                                            <strong class="title">Education</strong>
                                            <span class="cont">Rochester Institute of Technology</span>
                                        </li>
                                        <li class="clearfix">
                                            <strong class="title">Major</strong>
                                            <span class="cont">Computer Engineering / Computer Science</span>
                                        </li>
                                        <li class="clearfix">
                                            <strong class="title">E-mail</strong>
                                            <span class="cont"><a href="mailto:ctc7359@rit.edu">ctc7359@rit.edu</a></span>
                                        </li>
                                        <li class="clearfix">
                                            <strong class="title">Phone</strong>
                                            <span class="cont"><a href="tel:+12562548456">(908)-403-1635</a></span>
                                        </li>
                                        <li class="clearfix">
                                            <strong class="title"><span class="button">Available</span></strong>
                                            <span class="cont"><i class="rsicon rsicon-calendar"></i>January, 2020</span>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="profile-social">
                            <ul class="social">
                                <li><a class="ripple-centered" href="https://github.com/carsonclarke570"><i
                                        class="rsicon rsicon-github"></i></a></li>
                                <li><a class="ripple-centered" href="https://www.linkedin.com/in/carsonclarke/"><i
                                        class="rsicon rsicon-linkedin"></i></a></li>
                                <li><a class="ripple-centered" href="https://www.facebook.com/carson.clarkemagrab.7"><i
                                        class="rsicon rsicon-facebook"></i></a></li>
                                {/* <li><a class="ripple-centered" href="https://plus.google.com" target="_blank"><i
                                        class="rsicon rsicon-google-plus"></i></a></li>
                                <li><a class="ripple-centered" href="https://dribbble.com" target="_blank"><i
                                        class="rsicon rsicon-dribbble"></i></a></li>
                                <li><a class="ripple-centered" href="https://www.instagram.com" target="_blank"><i
                                        class="rsicon rsicon-instagram"></i></a></li> */}
                            </ul>
                        </div>
                    </div>
            
                    <div class="section-txt-btn">
                        <p><a class="btn btn-lg btn-border ripple" href={pdf}>Download Resume</a></p>
            
                        <p>
                            <b>Always Moving Forward.</b>
                        </p>
                        <p>
                            Hello! I'm Carson Clarke-Magrab. I'm a fifth-year Computer Engineering and Computer Science student at the 
                            Rochester Institute of Technology. Graduating in December 2020 and currently available to work in January 2021.  
                        </p>
                        <p>
                            Specialized in web development, embedded development
                            and graphics programming. Well-versed in numerous programming languages including C/C++, Python, Golang and Java.
                            Comfortable with OpenGL, as well as Javascript and SQL.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
};

export default Profile;