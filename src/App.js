import "./App.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import AboutMe from "./Component/AboutMe";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Project from "./Component/Project";
import ProjectDetail from "./Component/ProjectDetail";
import Skills from "./Component/Skills";

function App() {
  return (
    <BrowserRouter>
      <header id="menu-bar">
        <div id="website-title" r>
          Hee Eun's Portfolio
        </div>

        <nav id="nav-container">
          <Link to={"/"} className="nav-menu">
            Home
          </Link>
          <Link to={"/aboutme"} className="nav-menu">
            About Me
          </Link>
          <Link to={"/skills"} className="nav-menu">
            Skills
          </Link>
          <Link to={"/project"} className="nav-menu">
            Project
          </Link>
          <Link to={"/login"} className="nav-menu">
            Login
          </Link>
        </nav>
      </header>
      <main id="mainContents-container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/aboutme" Component={AboutMe} />
          <Route path="/skills" Component={Skills} />
          <Route path="/project" Component={Project} />
          <Route path="/project/:projectTitle" Component={ProjectDetail} />
          <Route path="/login" Component={Login} />
        </Routes>
      </main>
      <footer>
        <i>Copyright 2023. heeeun all rights reserved </i>
        <span>😃</span>
      </footer>
    </BrowserRouter>
  );
}

export default App;
