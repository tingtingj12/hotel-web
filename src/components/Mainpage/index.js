import React from 'react';
/*
import {Image} from 'react-bootstrap';
import {Form, FormGroup, Col, Row, FormControl, Button, ControlLabel, 
ButtonToolbar, Jumbotron, Modal} from 'react-bootstrap'
import {CenterD,SignButton,LeftCol,RightCol,TitleText,OpaqueButton,CenterImage,CenterCol} from './components'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';
import {Collapse} from "react-bootstrap"
import TextField from 'material-ui/TextField';
*/
import {CenterD, CenterCol, TitleText} from './components'
/*
const styles = {
  underlineStyle: {
    borderColor: '#CE0014',
  },
  txtfieldstyles:{
    width:'100%',
    fontSize:'150%'
  }
};*/

export default function Mainpage(props){
  /*
  function handleClick(e) {
    e.preventDefault();
    alert('Log in Failed');
  }*/
  
  return(
    <CenterD>
      <CenterCol sm={4} md={4} style={{width:'50vw',minWidth:'300px'}}>
        <TitleText style={{fontSize:'6.5vmin',fontWeight:'bold'}}>It's a better place since you came along</TitleText>
      </CenterCol>
    </CenterD>
  );
}