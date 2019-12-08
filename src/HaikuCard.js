import React, { Component } from 'react';
import './Haiku.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import mylogo from './mylogo.jpg';
import love from './icons/love.png';
import courage from './icons/Courage.png';
import peace from './icons/Peace.png';
import strenght from './icons/Strenght.png';
import happiness from './icons/Happiness.png';
import dream from './icons/Dream.png';

//import peace from './icons/Peace.png';

class HaikuCard extends React.Component {
  
  


    render(){
       var icons = [ 'love','happiness','courage','peace'];
       function popelse(){
            alert('popelse ==> ');
            var randItem = icons[Math.floor(Math.random()*icons.length)];
            alert(randItem);
        }

        return (
            <div>
                {/*
                <div className="HaikuCard">
                gsgfghqeh
                 hfhdhdgh
                 nghwg
                </div>
                */}
                <Card  style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.img} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text className="Haiku">{this.props.text} </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
            
}

export default HaikuCard;

