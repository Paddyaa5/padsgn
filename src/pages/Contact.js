import React from "react";
import { motion } from "framer-motion";
//import animations
import { pageAnim } from "../animations/animations";

export default function Contact() {
    return (
        <motion.div
            variants={pageAnim}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <div className="app">Contact Us</div>
        </motion.div>
    );
}
