import React, { Component } from 'react';
//import {Collapse} from 'react-bootstrap';
import Header from './components/Header';
import Mainpage from './components/Mainpage';
import Footer from './components/Footer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class web extends Component {
  constructor(props) {
    super(props);
    this.state={
      location: null,
      date: null,
    };
  }
/*
  goNext = (e) =>{
    let tempValue = this.state.signUpStep
    this.setState({signUpStep:tempValue < 3?tempValue+1:3})
    if(tempValue==3)this.setState({open:false})
  }

  goBack = (e) =>{
    let tempValue = this.state.signUpStep
    this.setState({signUpStep:tempValue > 1?tempValue-1:0})
    if(tempValue==0)this.setState({open:false})
  }
  signUp = ()=>{this.setState({open:!this.state.open,signUpStep:0})}
*/

  render() {
    return (
        <MuiThemeProvider>
            <Header /> 
            <Mainpage /> 
            <Footer />
        </MuiThemeProvider>
    );
  }
}

export default web;