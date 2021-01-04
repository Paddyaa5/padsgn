import React from "react";

//import icons
import { FaGem } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaPaintBrush } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
//import images
import DoMore from "../images/DoMore.jpg";

const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>
                    High <span>Quality</span> Services
                </h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <FaGem />
                            <h3>Amazing Design</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaPiggyBank />
                            <h3>Cheaper Than Agencies</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaPaintBrush />
                            <h3>Amazing Design</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <FaReact />
                            <h3>Amazing Design</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src={DoMore} alt="do-more" className="image" />
            </div>
        </div>
    );
};

export default ServicesSection;
