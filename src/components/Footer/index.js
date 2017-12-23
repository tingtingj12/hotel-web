import React from 'react';
//import {Image,Nav,NavItem,Glyphicon} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import {BlackSpan, MiddleDiv} from './components';

export default function Footer(props){
    return(
        <MiddleDiv>
            <BlackSpan>
                Copyright <Glyphicon glyph="copyright-mark"/> CS 336 GROUP 20. All rights reserved
            </BlackSpan>
        </MiddleDiv>
    )
}