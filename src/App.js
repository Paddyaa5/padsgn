import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
//Global Styles
import GlobalStyle from "./styles/GlobalStyle";
//import animation
import { AnimatePresence } from "framer-motion";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Navigation/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
    const location = useLocation();
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                    <Route path="/" exact component={AboutUs} />
                    <Route path="/about" component={AboutUs} />
                    <Route path="/projects" exact component={Projects} />
                    <Route path="/projects/:id" component={ProjectDetail} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </AnimatePresence>
        </div>
    );
};

export default App;
