import React from 'react';

class Sidebar extends React.Component {

    render() {
        return (
            <div class="sidebar sidebar-fixed">
                
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
                </div>
            </div>
        );
    }
};

export default Sidebar;