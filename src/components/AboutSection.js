import React from "react";
import AboutImage from "../images/AimHigh.jpg";

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We Work To Make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            Your <span>Dreams</span>
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>Come True</h2>
                    </div>
                </div>
                <p>Contact Us for any web design ideas you have.</p>
                <button>Contact Us</button>
            </div>
            <div className="image-container">
                <img src={AboutImage} alt="aim-high" className="image" />
            </div>
        </div>
    );
};

export default AboutSection;
