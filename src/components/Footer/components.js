import styled from 'styled-components';
import {Row,Col} from 'react-bootstrap';

export const FooterDiv = styled(Row)`
width:100%;
height:10vh;
position:fixed;
bottom:0;
background-color:#F4F4F4;
margin:auto;
` 
export const MiddleDiv = styled.div`
margin-top:5%;
margin-bottom:auto;
top:50%;
`
export const LeftDiv = styled(Col)`
padding-top:1.2%;
padding-left:5%;
float:left;
display:flex;
flex-direction:row;
color:#4A4A4A;
`
export const RightDiv = styled(Col)`
padding-top:1.2%;
padding-right:5%;
float:right;
display:flex;
flex-direction:row;
`
export const BlackSpan = styled.span`
color:#4A4A4A;
font-size:1em;
`