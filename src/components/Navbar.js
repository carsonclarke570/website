import React from 'react';

import Brightness4Icon from '@material-ui/icons/Brightness4';

class Navbar extends React.Component {

    render() {
        return (
            <div class="head-bar">
                <div class="head-bar-inner">
                    <div class="row">
                        <div class="col-sm-3 col-xs-6">
                            <a class="logo" href=""><span>C</span>C</a>
                        </div>
        
                        <div class="col-sm-9 col-xs-6">
                            <div class="nav-wrap">
                                <nav id="nav" class="nav">
                                    <ul class="clearfix">
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#skills">Skills</a></li>
                                        <li><a href="#portfolio">Projects</a></li>
                                        <li><a href="#experience">Experience</a></li>
                                        {/* <li><a href="#references">References</a></li>
                                        <li>
                                            <a href="category.html">Blog</a>
                                            <ul>
                                                <li><a href="single-image.html">Image Post</a></li>
                                                <li><a href="single-slider.html">Slider Post</a></li>
                                                <li><a href="single-video.html">Video Post</a></li>
                                                <li><a href="single-audio.html">Audio Post</a></li>
                                                <li><a href="single-vimeo.html">Vimeo Post</a></li>
                                                <li><a href="single-youtube.html">Youtube Post</a></li>
                                                <li><a href="single-dailymotion.html">Dailymotion Post</a></li>
                                                <li><a href="single.html">Without Media Post</a></li>
                                                <li><a href="typography.html">Typography Page</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                            </ul>
                                        </li> */}
                                        <li><a href="#calendar">Calendar <span></span></a></li>
                                        <li><a href="#contact">Contact <span></span></a></li>
                                    </ul>
                                </nav>
        
                                <button class="btn-sidebar-open" onClick={() => this.props.changeMode()}>
                                    <Brightness4Icon style={{color: "rgba(255, 255, 255, 0.7)",}}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Navbar;