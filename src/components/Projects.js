import React from 'react';


class Projects extends React.Component {

    render() {
        return (
            <section id="portfolio" class="section section-portfolio">
                <div class="animate-up">
                    <h2 class="section-title">Project Showcase</h2>
              
                    <div class="grid">
                        <div class="grid-sizer"></div>
              
                        <div class="grid-item size22 photography">
                            <div class="grid-box">
                                <figure class="portfolio-figure">
                                    <img src="https://github.com/carsonclarke570/ray-tracer/blob/master/images/title.png?raw=true" alt=""/>
                                    <figcaption class="portfolio-caption">
                                        <div class="portfolio-caption-inner">
                                            <h3 class="portfolio-title">Ray Tracing</h3>
                                            <h4 class="portfolio-cat">Graphics Project</h4>
                    
                                            <div class="btn-group">
                                                <a class="btn-link" href="https://github.com/carsonclarke570/ray-tracer" target="_blank"><i
                                                        class="rsicon rsicon-link"></i></a>
                                                <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox1"
                                                    href="#portfolio1-inline1"><i class="rsicon rsicon-eye"></i></a>
                                                {/* <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox1"
                                                    href="#portfolio1-inline2"></a>
                                                <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox1"
                                                    href="#portfolio1-inline3"></a> */}
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
              
                                <div id="portfolio1-inline1" class="fancybox-inline-box">
                                    <div class="inline-embed" data-embed-type="image" data-embed-url="https://github.com/carsonclarke570/ray-tracer/blob/master/images/title.png?raw=true"></div>
                                    <div class="inline-cont">
                                        <h2 class="inline-title">Ray Tracing</h2>
                
                                        <div class="inline-text">
                                            <p>Ray tracing is a form of rendering that seeks to model the behavior of 
                                            light. By "tracing" the path of light from a "camera lens" into some 
                                            virtual environment, photo-realistic images can be generated. </p>
                                            <p>The project implements a simple ray-tracing algorithm that utilizes
                                            compute shaders to completely parallelize the calculation of each ray.
                                            The algorithm is based off of Peter Shirley's "Ray Tracing in One Weekend" 
                                            series. While Shirley elects to do all his calculations on CPU, this 
                                            project seeks to leverage the processing power of the GPU.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                  
              
                        <div class="grid-item size11 bridge">
                            <div class="grid-box">
                                <figure class="portfolio-figure">
                                    <img src="img/uploads/portfolio/portfolio-thumb-11-289x281.jpg" alt=""/>
                                    <figcaption class="portfolio-caption">
                                        <div class="portfolio-caption-inner">
                                            <h3 class="portfolio-title">Daybreak Engine</h3>
                                            <h4 class="portfolio-cat">Graphics Project</h4>
                    
                                            <div class="btn-group">
                                                <a class="btn-link" href="https://github.com/carsonclarke570/render-farm" target="_blank"><i
                                                        class="rsicon rsicon-link"></i></a>
                                                <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox2"
                                                    href="#portfolio2-inline1"><i class="rsicon rsicon-eye"></i></a>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                    
                                {/* <!-- Start: Portfolio Inline Boxes --> */}
                                <div id="portfolio2-inline1" class="fancybox-inline-box">
                                    <div class="inline-cont">
                                        <h2 class="inline-title">Daybreak Engine</h2>
                    
                                        <div class="inline-text">
                                            <p>Daybreak is a rendering engine designed for various graphics experiments and personal learning purposes. 
                                                There have been several iterations of the Daybreak source code, each employing
                                                different software design patterns; all of which are available on Github. I have 
                                                settled on using one repository (render-farm), which serves as a sort of boilerplate that
                                                I can borrow structures and algorithms from for other projects such as my raytracer.</p>
                    
                                            <p>Daybreak has been modified to implement various graphics projects such as marching cubes, 
                                                physically-based rendering (PBR), compute shader and raytracing. In the future I hope to 
                                                extend the engine to be even more versatile and support more full-fledged graphics projects.</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End: Portfolio Inline Boxes --> */}
                            </div>
                        </div>

                        <div class="grid-item size11 bridge">
                            <div class="grid-box">
                                <figure class="portfolio-figure">
                                    <img src="img/uploads/portfolio/portfolio-thumb-11-289x281.jpg" alt=""/>
                                    <figcaption class="portfolio-caption">
                                        <div class="portfolio-caption-inner">
                                            <h3 class="portfolio-title">Personal Website</h3>
                                            <h4 class="portfolio-cat">Web Project</h4>
                    
                                            <div class="btn-group">
                                                <a class="btn-link" href="https://cclarke-magrab.me" target="_blank"><i
                                                        class="rsicon rsicon-link"></i></a>
                                                <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox2"
                                                    href="#portfolio2-inline1"><i class="rsicon rsicon-eye"></i></a>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                    
                                {/* <!-- Start: Portfolio Inline Boxes --> */}
                                <div id="portfolio2-inline1" class="fancybox-inline-box">
                                    <div class="inline-cont">
                                        <h2 class="inline-title">Personal Website</h2>
                    
                                        <div class="inline-text">
                                            <p>My personal website. Built using an existing Material design HTML template and converted to React for manageability</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End: Portfolio Inline Boxes --> */}
                            </div>
                        </div>
                    </div>
              
                    {/* <div class="grid-more">
                        <span class="ajax-loader"></span>
                        <button class="btn btn-border ripple"><i class="rsicon rsicon-add"></i></button>
                    </div> */}
                </div>
            </section>
        );
    }
};

export default Projects;