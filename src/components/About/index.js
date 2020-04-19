import React from "react";
// import image from "./../../../assets/images/profile.jpg"
import { Link } from "react-router-dom";

function About() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-header">
                        <Link to="/About">
                            <h1> About Me </h1>
                        </Link>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            {/* <img id="profile-pic" src={image} alt="My-Pic" width="100%"/> */}
                    </div>
                            <div className="col-md-9">
                                <p>Hey there! Thank you for visiting my profile! My name is Suneetha Burla and I am a Technical
                                Program Manager by
                                profession and have been in the Program/Project Management for past 12 years. Besides
                                Program Management, it's my passion and dream
                                to learn coding and web development. Through UC Berkely Coding Bootcamp, I aspire to become
                                a full stack web
                                developer and build some great looking websites!
                        </p>
                                <p>As a program manager, I have extensively worked on the implementation of complex strategic
                                and high visibility
                                business initiatives on mobile app (iOS and Android), mobile web and tablet web
                                applications.
                        </p>
                                <p>I enjoy doing community services and actively volunteer for non profit organizations such as
                                art of living
                                and International association for human values. Other interests include personality
                                development, leadership,
                                spirituality and mindfulness. I like travelling, cooking, reading books and watching
                                inspirational videos and knowledge talks.
                        </p>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
            
    )
}

export default About;