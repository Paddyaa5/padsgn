import React from "react";
import { Switch, Route } from "react-router-dom";
//Global Styles
import GlobalStyle from "./styles/GlobalStyle";
//import pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Navigation/Nav";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";

const App = () => {
    return (
        <div>
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact component={AboutUs} />
                <Route path="/about" component={AboutUs} />
                <Route path="/projects" exact component={Projects} />
                <Route path="/projects/:id" component={ProjectDetail} />
                <Route path="/contact" component={Contact} />
            </Switch>
        </div>
    );
};

export default App;
