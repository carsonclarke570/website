import React from 'react';

import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { makeStyles } from '@material-ui/core/styles';

import Experience from './components/Experience';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

const COLOR_MAP = {
    CYAN: ["cyan.css", "07aaf5"],
    ORANGE: ["orange.css", "ff9801"],
    PALE_CYAN: ["pale-cyan.css", "83d5fb"]
};

const rootStyle = makeStyles((theme) => ({
    transform: 'none'
}));

const speedDialStyle = makeStyles((theme) => ({
    zIndex: 10,
    position: 'fixed',
    left: theme.spacing(2),
    bottom: theme.spacing(2),
}));

class ColorWheel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: COLOR_MAP.PALE_CYAN,
            open: false
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClosed = this.handleClosed.bind(this);
    }

    handleOpen() {
        this.setState({ open: true });
    }

    handleClosed() {
        this.setState({ open: false });
    }
    
    render() {
        return (
            <div className={rootStyle}>
                <SpeedDial
                    ariaLabel="Color Wheel"
                    class="btn-color"
                    // className={speedDialStyle}
                    icon={<SpeedDialIcon/>}
                    onClose={this.handleClosed}
                    onOpen={this.handleOpen}
                    open={this.open}
                    direction="right"
                >

                </SpeedDial>
            </div>  
        );
    }

};

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            color: COLOR_MAP.PALE_CYAN,
            dark_mode: false,
            prev_color: null
        };

        this.changeMode = this.changeMode.bind(this);
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(color) {
        this.setState({ color: color });
    }

    changeMode() {
        this.setState(state => ({ dark_mode: !state.dark_mode }));
    }

    render() {
        const mode = this.state.dark_mode ? "theme-skin-dark" : "theme-skin-light";
        const not_mode = !this.state.dark_mode ? "theme-skin-dark" : "theme-skin-light";
        const theme_color = "theme-color-" + this.state.color[1];
        const css_color = "colors/" + this.state.color[0];

        var html_tag = document.getElementById("big_boy")

        html_tag.classList.remove(not_mode);
        html_tag.classList.remove(this.state.prev_color);
        html_tag.classList.add(mode);
        html_tag.classList.add(theme_color);
        
        this.state.prev_color = theme_color;

        return (
            <div>
                <link rel="stylesheet" type="text/css" href={css_color}></link>
            
                <div class="wrapper">
                    <header class="header">
                        <div class="head-bg" style={{"background-image": "url('img/uploads/rs-cover.jpg')"}}></div>
                        <Navbar changeMode={this.changeMode}/>
                    </header>

                    
                    <div class="content">
                        <div class="container">
                            <Profile />
                            <Skills />
                            <Projects />
                            <Experience />
                    
                    
                    {/* <!-- #experience --> */}
                    
                    <section id="education" class="section section-education">
                        <div class="animate-up">
                            <h2 class="section-title">Education</h2>
                    
                            <div class="timeline">
                                <div class="timeline-bar"></div>
                                <div class="timeline-inner clearfix">
                    
                                    <div class="timeline-box timeline-box-compact timeline-box-left">
                                        <span class="dot"></span>
                    
                                        <div class="timeline-box-inner animate-right">
                                            <span class="arrow"></span>
                    
                                            <div class="date"><span>2015 - Present</span></div>
                                            <h3>B.S. Computer Engineering & Computer Science</h3>
                                            <h4>Rochester Institute of Technology</h4>
                                        </div>
                                    </div>
                    
                                    <div class="timeline-box timeline-box-compact timeline-box-right">
                                        <span class="dot"></span>
                    
                                        <div class="timeline-box-inner animate-left">
                                            <span class="arrow"></span>
                    
                                            <div class="date"><span>2011 - 2015</span></div>
                                            <h3>High School Diploma</h3>
                                            <h4>Westfield High School</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #education --> */}
                    
                    {/* <section id="references" class="section section-references">
                        <div class="animate-up">
                            <h2 class="section-title">References</h2>
                    
                            <div class="section-box">
                                <ul class="ref-slider">
                                    <li>
                                        <div class="ref-box">
                                            <div class="person-speech">
                                                <p>I confirm that I have dealt with New Company Ltd since 1998. Their work has been a major
                                                    factor in our
                                                    website's success, helping it to become one of the most visited resources of its kind on
                                                    the Internet.</p>
                                            </div>
                                            <div class="person-info clearfix">
                                                <img class="person-img" src="img/uploads/rs-avatar-60x60.jpg" alt="Headshot" />
                    
                                                <div class="person-name-title">
                                                    <span class="person-name">Alexander Jokovich</span>
                                                    <span class="person-title">Modern LLC , HR</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div class="ref-slider-nav">
                                    <span id="ref-slider-prev" class="slider-prev"></span>
                                    <span id="ref-slider-next" class="slider-next"></span>
                                </div>
                            </div>
                        </div>
                    </section>
                    */}
                    
                    {/* <section id="blog" class="section section-blog">
                        <div class="animate-up">
                            <h2 class="section-title">From The Blog</h2>
                    
                            <div class="blog-grid">
                                <div class="grid-sizer"></div>
                                <div class="grid-item">
                                    <article class="post-box">
                                        <div class="post-media">
                                            <div class="post-image">
                                                <a href="single.html"><img src="img/uploads/thumb-449x286-1.jpg" alt=""/></a>
                                            </div>
                                        </div>
                    
                                        <div class="post-data">
                                            <time class="post-datetime" datetime="2015-03-13T07:44:01+00:00">
                                                <span class="day">03</span>
                                                <span class="month">MAY</span>
                                            </time>
                    
                                            <div class="post-tag">
                                                <a href="">#Photo</a>
                                                <a href="">#Architect</a>
                                            </div>
                    
                                            <h3 class="post-title">
                                                <a href="single-image.html">Image Post</a>
                                            </h3>
                    
                                            <div class="post-info">
                                                <a href=""><i class="rsicon rsicon-user"></i>by admin</a>
                                                <a href=""><i class="rsicon rsicon-comments"></i>56</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                    
                                <div class="grid-item">
                                    <article class="post-box">
                                        <div class="post-media">
                                            <div class="post-image">
                                                <a href="single-vimeo.html">
                                                    <img src="img/uploads/thumb-449x286-5.jpg" alt=""/>
                                                    <span class="post-type-icon"><i class="rsicon rsicon-play"></i></span>
                                                </a>
                                            </div>
                                        </div>
                    
                                        <div class="post-data">
                                            <time class="post-datetime" datetime="2015-03-13T07:44:01+00:00">
                                                <span class="day">03</span>
                                                <span class="month">MAY</span>
                                            </time>
                    
                                            <div class="post-tag">
                                                <a href="">#Photo</a>
                                                <a href="">#Architect</a>
                                            </div>
                    
                                            <h3 class="post-title">
                                                <a href="single-vimeo.html">Vimeo Video Post</a>
                                            </h3>
                    
                                            <div class="post-info">
                                                <a href=""><i class="rsicon rsicon-user"></i>by admin</a>
                                                <a href=""><i class="rsicon rsicon-comments"></i>56</a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!-- #blog --> */}
                    
                    
                    <section id="interests" class="section section-interests">
                        <div class="animate-up">
                            <h2 class="section-title">My Interests</h2>
                    
                            <div class="section-box">
                                <p>
                                    I spend a fair amount of my free time playing guitar and listening to music. I served as 
                                    as secretary to both the RIT Jam Club and Student Music Association, two on-campus music clubs, 
                                    and helped organize and plan various events and shows. Academically and personally, I find enjoyment in teaching
                                    and collaborating with my peers.
                                </p>
                    
                                <ul class="interests-list">
                                    <li>
                                        <i class="map-icon map-icon-movie-theater"></i>
                                        <span>TV/Movies</span>
                                    </li>
                                    <li>
                                        <i class="map-icon map-icon-book-store"></i>
                                        <span>Reading</span>
                                    </li>
                                    <li>
                                        <i class="map-icon rsicon-audio"></i>
                                        <span>Music</span>
                                    </li>
                                    <li>
                                        <i class="map-icon map-icon-electronics-store"></i>
                                        <span>Video Games</span>
                                    </li>
                                    <li>
                                        <i class="map-icon map-icon-gym"></i>
                                        <span>Working Out</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #interests --> */}
                    
                    <section id="calendar" class="section section-calendar">
                        <div class="animate-up">
                            <h2 class="section-title">Availability Calendar</h2>
                    
                            <div id="busyCalendar" class="calendar-busy">
                                <div class="calendar-today" style={{"background-image": "url('img/uploads/rs-calendar-cover.jpg')"}}>
                                    <div class="valign-outer">
                                        <div class="valign-middle">
                                            <div class="valign-inner">
                                                <div class="date">
                                                    <span class="day"></span>
                                                    <span class="month"></span>
                                                </div>
                                                <div class="week-day"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    
                                <div class="calendar-cont">
                                    <div class="calendar-header">
                                        <div class="calendar-nav">
                                            <span class="active-date"><span class="active-month"></span><span
                                                    class="active-year"></span></span>
                                            <a class="calendar-prev ripple-centered" title="Prev"><i class="rsicon rsicon-chevron_left"></i></a>
                                            <a class="calendar-next ripple-centered" title="Next"><i
                                                    class="rsicon rsicon-chevron_right"></i></a>
                                        </div>
                                    </div>
                    
                                    <table class="calendar-body">
                                        <thead class="calendar-thead"></thead>
                                        <tbody class="calendar-tbody"></tbody>
                                    </table>
                                    <div class="calendar-busy-note">Sorry. I'm not available on those days</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #calendar --> */}
                    
                    <section id="contact" class="section section-contact">
                        <div class="animate-up">
                            <h2 class="section-title">Contact Me</h2>
                    
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="section-box contact-form">
                                        <h3>Feel free to contact me</h3>
                    
                                        <form class="rsForm" action="php/mailsender.php" method="post">
                                            <div class="input-field">
                                                <label>Name</label>
                                                <input type="text" name="rsName" value="" />
                                                <span class="line"></span>
                                            </div>
                    
                                            <div class="input-field">
                                                <label>Email</label>
                                                <input type="email" name="rsEmail" value="" />
                                                <span class="line"></span>
                                            </div>
                    
                                            <div class="input-field">
                                                <label>Subject</label>
                                                <input type="text" name="rsSubject" value="" />
                                                <span class="line"></span>
                                            </div>
                    
                                            <div class="input-field">
                                                <label>Message</label>
                                                <textarea rows="4" name="rsMessage"></textarea>
                                                <span class="line"></span>
                                            </div>
                            
                            <div class="check-field">
                            <input type="checkbox" name="rsPivacyPolicy" id="rsPivacyPolicy"/>
                            <label for="rsPivacyPolicy">I have read the Privacy Policy note.</label>
                            </div>
                    
                                            <span class="btn-outer btn-primary-outer ripple">
                                                <input class="rsFormSubmit btn btn-lg btn-primary" type="submit" value="Send" />
                                            </span>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <!-- #contact -->
                    <!-- END: PAGE CONTENT --> */}
            
                </div>
                {/* <!-- .container --> */}
            </div>
            {/* <!-- .content --> */}
            
            <footer class="footer">
                <div class="footer-social">
                    <ul class="social">
                        <li><a class="ripple-centered" href="https://github.com/carsonclarke570" target="_blank"><i
                                                class="rsicon rsicon-github"></i></a></li>
                                        <li><a class="ripple-centered" href="https://www.linkedin.com/in/carsonclarke/" target="_blank"><i
                                                class="rsicon rsicon-linkedin"></i></a></li>
                                        <li><a class="ripple-centered" href="https://www.facebook.com/carson.clarkemagrab.7" target="_blank"><i
                                                class="rsicon rsicon-facebook"></i></a></li>
                    </ul>
                </div>
            </footer>
            {/* <!-- .footer --> */}
            
            </div>
            {/* <!-- .wrapper --> */}
            
            <ColorWheel />
            <a class="btn-scroll-top" href="#"><i class="rsicon rsicon-arrow-up"></i></a>
            
            <div id="overlay"></div>
            <div id="preloader">
                <div class="preload-icon"><span></span><span></span></div>
                <div class="preload-text">Loading ...</div>
            </div>
            </div>
        );
    }
};

export default App;
