import React from 'react';


class Skill extends React.Component {

    render() {
        return (
            <div class="col-sm-6" style={{paddingTop: "10px"}}>
                <div class="progress-bar">
                    <div class="bar-data">
                        <span class="bar-title"><b>{this.props.left}</b></span>
                        <span class="bar-value">{this.props.right}</span>
                    </div>
                    <div class="bar-line">
                        <span class="bar-fill" data-width={this.props.fill}></span>
                    </div>
                </div>
            </div>
        );
    }

};

class Skills extends React.Component {

    render() {
        return (
            <section id="skills" class="section section-skills">
                <div class="animate-up">
                    <h2 class="section-title">Skills</h2>
              
                    <div class="section-box">
                        <div class="row">
                            <Skill left="C/C++" right="Proficient" fill="90%" />
                            <Skill left="Golang" right="Proficient" fill="90%" />
                            <Skill left="Java" right="Proficient" fill="90%" />
                            <Skill left="Python" right="Proficient" fill="90%" /> 
                            <Skill left="OpenGL/GLSL" right="Comfortable" fill="60%" /> 
                            <Skill left="HTML/CSS" right="Comfortable" fill="60%" /> 
                            <Skill left="Javascript" right="Familiar" fill="30%" /> 
                            <Skill left="SQL" right="Familiar" fill="30%" />                         
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default Skills;