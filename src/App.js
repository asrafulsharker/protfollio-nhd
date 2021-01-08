import React from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import Home from './comopnents/Pages/home';
import Nav from './comopnents/Nav/nav';
import Resume from './comopnents/Pages/resume';
import Contact from './comopnents/Pages/contact';
import Footer from './comopnents/Footer/footer';
import Gallery from './comopnents/Pages/galary';
import Skill from './comopnents/Pages/skill';
import 'bootstrap/dist/css/bootstrap.min.css';


import Project1 from './comopnents/Pages/project/project1'
import Project2 from './comopnents/Pages/project/project2'
import Project3 from './comopnents/Pages/project/project3'

function App() {
  return (
    <>
    <Nav/>
  
    <Route path="/" exact component={Home}/>
    <Route path="/resume" exact component={Resume}/>
    <Route path="/contact" exact component={Contact}/>
    <Route path="/protfollio" exact component={Gallery}/>
    <Route path="/Github Finder" exact component={Project1}/>
    <Route path="/Shopping Cart using javaScript" exact component={Project2}/>
    <Route path="/project3" exact component={Project3}/>
    <Route path="/skill" exact component={Skill}/>
    <Footer/>
    </>
  );
}

export default App;