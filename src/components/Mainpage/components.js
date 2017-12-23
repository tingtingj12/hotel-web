//import React from 'react';
//import {Button,Row,Col,Image} from 'react-bootstrap';
import {Button,Col} from 'react-bootstrap';
import styled from 'styled-components';
import background from '../Images/mainbackground.jpg';

export const CenterD = styled.div`
position:absolute;
width:100%;
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
height:75vh;
overflow:hidden;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap-reverse;
`;

export const LeftCol = styled(Col)`
float:left;
margin: auto;
margin-left:5%;
`

export const CenterCol = styled(Col)`
margin-top:5%;
width: 100%;
margin-left: auto;
margin-right: auto;
padding-bottom :2%;
align-items:center;
display: -webkit-flex; /* Safari */
-webkit-flex-wrap: wrap; /* Safari 6.1+ */
display: flex;   
flex-wrap: wrap;
justify-content:space-around;
`
export const RightCol = styled(Col)`
float:right;
border-radius: 10px;
border: 20px 20px 10px 20px solid white;
margin-right:5%;
margin-left:5%;
`
export const SignButton = styled.button`
width:30vw;
height:50px;
`;

export const TitleText = styled.h1`
color:white;
`
export const OpaqueButton = styled(Button)`
min-height:25px;
height:5vmin;
color:white;
width:30vmin;
padding:0px;
vertical-align: middle;
`