import React from "react";
import { motion } from "framer-motion";
//import components
import AboutSection from "../components/About/AboutSection";
import ServicesSection from "../components/About/ServicesSection";
import FaqSection from "../components/About/FaqSection";
//import animations
import { pageAnim } from "../animations/animations";

export default function AboutUs() {
    return (
        <motion.div
            variants={pageAnim}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <AboutSection />
            <ServicesSection />
            <FaqSection />
        </motion.div>
    );
}
