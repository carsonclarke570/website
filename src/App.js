import React from 'react';

function App() {
  return (
    <div>
      
      {/* <!-- .mobile-nav --> */}
      
      <div class="sidebar sidebar-fixed">
          <button class="btn-sidebar btn-sidebar-close"><i class="rsicon rsicon-close"></i></button>
      
          <div class="widget-area">
              <aside class="widget widget-profile">
                  <div class="profile-photo">
                      <img src="img/uploads/rs-photo-v2.jpg" alt="Robert Smith"/>
                  </div>
                  <div class="profile-info">
                      <h2 class="profile-title">Carson Clarke-Magrab</h2>
      
                      <h3 class="profile-position">Software Engineer</h3>
                  </div>
              </aside>
              {/* <!-- .widget-profile --> */}
      
              <aside class="widget widget_contact">
                  <h2 class="widget-title">Contact Me</h2>
      
                  <form class="rsForm" action="php/mailsender.php" method="post">
                      <div class="input-field">
                          <label>Name</label>
                          <input type="text" name="rsName" value=""/>
                          <span class="line"></span>
                      </div>
      
                      <div class="input-field">
                          <label>Email</label>
                          <input type="email" name="rsEmail" value=""/>
                          <span class="line"></span>
                      </div>
      
                      <div class="input-field">
                          <label>Subject</label>
                          <input type="text" name="rsSubject" value=""/>
                          <span class="line"></span>
                      </div>
      
                      <div class="input-field">
                          <label>Message</label>
                          <textarea rows="4" name="rsMessage"></textarea>
                          <span class="line"></span>
                      </div>
            
                      <div class="check-field">
                        <input type="checkbox" name="rsPivacyPolicy" id="rsPivacyPolicyWidget"/>
                        <label for="rsPivacyPolicy">I have read the Privacy Policy note.</label>
                      </div>
      
                      <span class="btn-outer btn-primary-outer ripple">
                          <input class="rsFormSubmit btn btn-lg btn-primary" type="submit" value="Send"/>
                      </span>
                  </form>
              </aside>
              {/* <!-- .widget_contact --> */}
          </div>
          {/* <!-- .widget-area --> */}
      </div>
      {/* <!-- .sidebar --> */}

      <div class="wrapper">
          <header class="header">
              <div class="head-bg" style={{"background-image": "url('img/uploads/rs-cover.jpg')"}}></div>
          
              <div class="head-bar">
                  <div class="head-bar-inner">
                      <div class="row">
                          <div class="col-sm-3 col-xs-6">
                              <a class="logo" href="index.html"><span>RS</span>card</a>
                              {/* <!-- <a class="head-logo" href=""><img src="img/rs-logo.png" alt="RScard"/></a> --> */}
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
          
                                  <button class="btn-mobile btn-mobile-nav">Menu</button>
                                  <button class="btn-sidebar btn-sidebar-open"><i class="rsicon rsicon-menu"></i></button>
                              </div>
                              {/* <!-- .nav-wrap --> */}
                          </div>
                      </div>
                  </div>
              </div>
          </header>
          {/* <!-- .header --> */}
          
          <div class="content">
              <div class="container">
      
              {/* <!-- START: PAGE CONTENT --> */}
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
              
                                          <h2 class="profile-position">Software Engineer</h2></div>
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
                                              <strong class="title">Available</strong>
                                              <span class="cont">May 2020</span>
                                          </li>
                                          {/* <li class="clearfix">
                                              <strong class="title"><span class="button">On Vacation</span></strong>
                                              <span class="cont"><i class="rsicon rsicon-calendar"></i>till March 25, 2016</span>
                                          </li> */}
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div class="profile-social">
                              <ul class="social">
                                  <li><a class="ripple-centered" href="https://github.com/carsonclarke570" target="_blank"><i
                                          class="rsicon rsicon-github"></i></a></li>
                                  <li><a class="ripple-centered" href="https://www.linkedin.com/in/carsonclarke/" target="_blank"><i
                                          class="rsicon rsicon-linkedin"></i></a></li>
                                  <li><a class="ripple-centered" href="https://www.facebook.com/carson.clarkemagrab.7" target="_blank"><i
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
                          <p><a class="btn btn-lg btn-border ripple" target="_blank"
                                href="http://dev.novembit.com/rs_card/wp-content/uploads/2015/11/test-1.pdf">Download Resume</a></p>
              
                          <p>
                              Hello! I'm Carson Clarke-Magrab. I'm a fifth-year Computer Engineering and Computer Science student at the 
                              Rochester Institute of Technology. Experienced with software development processes. Specialized in web development
                              and graphics programming. Well-versed in numerous programming languages including C/C++, Python, Golang and Java.
                              Comfortable with Javascript and SQL.
                          </p>
                      </div>
                  </div>
              </section>
              {/* <!-- #about --> */}
              
              <section id="skills" class="section section-skills">
                  <div class="animate-up">
                      <h2 class="section-title">Skills</h2>
              
                      <div class="section-box">
                          <div class="row">
                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">C/C++</span>
                                          <span class="bar-value">Proficient</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="90%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">Golang</span>
                                          <span class="bar-value">Proficient</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="90%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">Java</span>
                                          <span class="bar-value">Proficient</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="90%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">Python</span>
                                          <span class="bar-value">Comfortable</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="60%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">HTML</span>
                                          <span class="bar-value">Comfortable</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="60%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">CSS</span>
                                          <span class="bar-value">Familiar</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="30%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">Javascript</span>
                                          <span class="bar-value">Familiar</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="30%"></span>
                                      </div>
                                  </div>
                              </div>

                              <div class="col-sm-6">
                                  <div class="progress-bar">
                                      <div class="bar-data">
                                          <span class="bar-title">SQL</span>
                                          <span class="bar-value">Familiar</span>
                                      </div>
                                      <div class="bar-line">
                                          <span class="bar-fill" data-width="30%"></span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* <!-- #skills --> */}
              
              <section id="portfolio" class="section section-portfolio">
              <div class="animate-up">
              <h2 class="section-title">Projects</h2>
              
              <div class="grid">
                  <div class="grid-sizer"></div>
              
                  <div class="grid-item size22 photography">
                      <div class="grid-box">
                          <figure class="portfolio-figure">
                              <img src="img/uploads/portfolio/portfolio-thumb-05-610x600.jpg" alt=""/>
                              <figcaption class="portfolio-caption">
                                  <div class="portfolio-caption-inner">
                                      <h3 class="portfolio-title">Lair</h3>
                                      <h4 class="portfolio-cat">Personal Project</h4>
              
                                      <div class="btn-group">
                                          <a class="btn-link" href="http://bit.ly/1YtB8he" target="_blank"><i
                                                  class="rsicon rsicon-link"></i></a>
                                          <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox1"
                                            href="#portfolio1-inline1"><i class="rsicon rsicon-eye"></i></a>
                                          <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox1"
                                            href="#portfolio1-inline2"></a>
                                          <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox1"
                                            href="#portfolio1-inline3"></a>
                                      </div>
                                  </div>
                              </figcaption>
                          </figure>
              
                          {/* <!-- Start: Portfolio Inline Boxes --> */}
                          <div id="portfolio1-inline1" class="fancybox-inline-box">
                              <div class="inline-embed" data-embed-type="image"
                                  data-embed-url="img/uploads/portfolio/portfolio-thumb-05-large.jpg"></div>
                              <div class="inline-cont">
                                  <h2 class="inline-title">Street photography is photography that features the chance
                                      encounters and random accidents within public places.</h2>
              
                                  <div class="inline-text">
                                      <p>Street photography does not necessitate the presence of a street or even the urban
                                          environment. Though people usually feature directly, street photography might be
                                          absent of people and can be an object or environment where the image projects a
                                          decidedly human character in facsimile or aesthetic.</p>
                                  </div>
                              </div>
                          </div>
              
                          <div id="portfolio1-inline2" class="fancybox-inline-box">
                              <div class="inline-embed" data-embed-type="image"
                                  data-embed-url="img/uploads/portfolio/portfolio-thumb-01-large.jpg"></div>
                              <div class="inline-cont">
                                  <div class="inline-text">
                                      <h2 class="inline-title">Framing and timing</h2>
              
                                      <p>Framing and timing can be key aspects of the craft with the aim of some street
                                          photography being to create images at a decisive or poignant moment. Street
                                          photography can focus on emotions displayed, thereby also recording people's history
                                          from an emotional point of view.</p>
                                  </div>
                              </div>
                          </div>
              
                          <div id="portfolio1-inline3" class="fancybox-inline-box">
                              <div class="inline-embed" data-embed-type="iframe"
                                  data-embed-url="https://player.vimeo.com/video/118244244"></div>
                              <div class="inline-cont">
                                  <div class="inline-text">
                                      <h2 class="inline-title">A Look Into Documenting Street Fashion Photography</h2>
              
                                      <p>HB Nam is an internationally known street fashion photographer. In this Leica Camera
                                          Portrait, Nam explains how he started in photography and what photography means to
                                          him. For Nam, it's about documenting what's around him and the concentration
                                          required to achieve a good shot.</p>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- End: Portfolio Inline Boxes --> */}
                      </div>
                  </div>
                  {/* <!-- .grid-item --> */}
              
                  <div class="grid-item size11 bridge">
                      <div class="grid-box">
                          <figure class="portfolio-figure">
                              <img src="img/uploads/portfolio/portfolio-thumb-11-289x281.jpg" alt=""/>
                              <figcaption class="portfolio-caption">
                                  <div class="portfolio-caption-inner">
                                      <h3 class="portfolio-title">Suspension Bridge</h3>
                                      <h4 class="portfolio-cat">Bridge</h4>
              
                                      <div class="btn-group">
                                          <a class="btn-link" href="http://bit.ly/1YtB8he" target="_blank"><i
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
                                  <h2 class="inline-title">Suspension Bridges - Design Technology</h2>
              
                                  <div class="inline-text">
                                      <p>Suspension bridges in their simplest form were originally made from rope and wood.
                                          Modern suspension bridges use a box section roadway supported by high tensile
                                          strength cables.
                                          In the early nineteenth century, suspension bridges used iron chains for cables. The
                                          high tensile cables used in most modern suspension
                                          bridges were introduced in the late nineteenth century.<br/>
                                          Today, the cables are made of thousands of individual steel wires bound tightly
                                          together. Steel, which is very strong under tension, is
                                          an ideal material for cables; a single steel wire, only 0.1 inch thick, can support
                                          over half a ton without breaking.</p>
              
                                      <p>Light, and strong, suspension bridges can span distances from 2,000 to 7,000 feet far
                                          longer than any other kind of bridge. They are
                                          ideal for covering busy waterways.</p>
              
                                      <p>With any bridge project the choice of materials and form usually comes down to cost.
                                          Suspension bridges tend to be the most expensive to build. A suspension bridge
                                          suspends the roadway from huge main cables, which extend
                                          from one end of the bridge to the other. These cables rest on top of high towers and
                                          have to be securely anchored into the bank at either
                                          end of the bridge. The towers enable the main cables to be draped over long
                                          distances. Most of the weight or load of the bridge is
                                          transferred by the cables to the anchorage systems. These are imbedded in either
                                          solid rock or huge concrete blocks. Inside the anchorages,
                                          the cables are spread over a large area to evenly distribute the load and to prevent
                                          the cables from breaking free.</p>
              
                                      <p>The Arthashastra of Kautilya mentions the construction of dams and bridges.A Mauryan
                                          bridge near Girnar was surveyed by James Princep.
                                          The bridge was swept away during a flood, and later repaired by Puspagupta, the
                                          chief architect of emperor Chandragupta I. The bridge
                                          also fell under the care of the Yavana Tushaspa, and the Satrap Rudra Daman. The use
                                          of stronger bridges using plaited bamboo and iron
                                          chain was visible in India by about the 4th century. A number of bridges, both for
                                          military and commercial purposes, were constructed by
                                          the Mughal administration in India.</p>
                                  </div>
                              </div>
                          </div>
                          {/* <!-- End: Portfolio Inline Boxes --> */}
                      </div>
                  </div>
                  {/* <!-- .grid-item -->
              */}
                  <div class="grid-item size11 nature photography">
                      <div class="grid-box">
                          <figure class="portfolio-figure">
                              <img src="img/uploads/portfolio/portfolio-thumb-08-289x281.jpg" alt=""/>
                              <figcaption class="portfolio-caption">
                                  <div class="portfolio-caption-inner">
                                      <h3 class="portfolio-title">Rocky Mountains</h3>
                                      <h4 class="portfolio-cat">Nature, Photography</h4>
              
                                      <div class="btn-group">
                                          <a class="btn-link" href="http://bit.ly/1YtB8he" target="_blank"><i
                                                  class="rsicon rsicon-link"></i></a>
                                          <a class="portfolioFancybox btn-zoom" data-fancybox-group="portfolioFancybox3"
                                            href="#portfolio3-inline1"><i class="rsicon rsicon-eye"></i></a>
                                          <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox3"
                                            href="#portfolio3-inline2"></a>
                                          <a class="portfolioFancybox hidden" data-fancybox-group="portfolioFancybox3"
                                            href="#portfolio3-inline3"></a>
                                      </div>
                                  </div>
                              </figcaption>
                          </figure>
              
                          {/* <!-- Start: Portfolio Inline Boxes --> */}
                          <div id="portfolio3-inline1" class="fancybox-inline-box">
                              <div class="inline-embed" data-embed-type="image"
                                  data-embed-url="img/uploads/portfolio/portfolio-thumb-08-large.jpg"></div>
                          </div>
              
                          <div id="portfolio3-inline2" class="fancybox-inline-box">
                              <div class="inline-embed" data-embed-type="image"
                                  data-embed-url="img/uploads/portfolio/portfolio-thumb-04-large.jpg"></div>
                          </div>
              
                          <div id="portfolio3-inline3" class="fancybox-inline-box">
                              <div class="inline-embed" data-embed-type="image"
                                  data-embed-url="img/uploads/portfolio/portfolio-thumb-02-large.jpg"></div>
                          </div>
                          {/* <!-- End: Portfolio Inline Boxes --> */}
                      </div>
                  </div>
                  {/* <!-- .grid-item --> */}
              </div>
              
              <div class="grid-more">
                  <span class="ajax-loader"></span>
                  <button class="btn btn-border ripple"><i class="rsicon rsicon-add"></i></button>
              </div>
              </div>
              </section>
              {/* <!-- #portfolio --> */}
              
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
              
                                      <div class="date">09/2019 - Present</div>
                                      <h3>PARSONS CORPORATION</h3>
                                      <h4>Software Engineer Intern</h4>
              
                                      <p>
                                          Currently developing Python software to support the results of 
                                          reverse-engineering and vulnerability research as part of
                                          an Agile software development team.
                                      </p>
                                  </div>
                              </div>
              
                              <div class="timeline-box timeline-box-right">
                                  <span class="dot"></span>
              
                                  <div class="timeline-box-inner animate-left">
                                      <span class="arrow"></span>
              
                                      <div class="date">06/2019 - 08/2019</div>
                                      <h3>COGO LABS</h3>
                                      <h4>Platform Engineer Intern</h4>
              
                                      <p>
                                        Responsible for developing and maintaining various Docker and Kubernetes-based 
                                        distributed systems as well as implementing backend API features in Golang.
                                      </p>
                                  </div>
                              </div>
              
                              <div class="timeline-box timeline-box-left">
                                  <span class="dot"></span>
              
                                  <div class="timeline-box-inner animate-right">
                                      <span class="arrow"></span>
              
                                      <div class="date">06/2018 - 12/2018</div>
                                      <h3>PARSONS CORPORATION</h3>
                                      <h4>Computer Engineer Intern</h4>
              
                                      <p>
                                          Researched network functionality and metadata extraction capabilities. Contributed 
                                          to the team codebase in Golang and Python.
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
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
                              and helped organize and plan various events and shows. 
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
      
      <a class="btn-scroll-top" href="#"><i class="rsicon rsicon-arrow-up"></i></a>
      
      <div id="overlay"></div>
      <div id="preloader">
          <div class="preload-icon"><span></span><span></span></div>
          <div class="preload-text">Loading ...</div>
      </div>
    </div>
  );
}

export default App;
