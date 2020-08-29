import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import $ from 'jquery';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
 

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <Router>
      <Header/>
      <Switch>
        <Route path="/about">
          <About data={this.state.resumeData.main} />
        </Route>
        <Route path="/resume">
          <Resume data={this.state.resumeData.resume} />
        </Route>
        <Route path="/portfolio">
          <Portfolio data={this.state.resumeData.portfolio} />
        </Route>
        <Route path="/contact">
          <Contact data={this.state.resumeData.main} />
        </Route>
        <Route path="/">
          <Home data={this.state.resumeData.main} />
        </Route>
      </Switch>
    </Router>
    );
  }
}

export default App;
