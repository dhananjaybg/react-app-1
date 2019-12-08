import React , { useState } from 'react';
//import logo from './logo.svg';

import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HaikuCard from './HaikuCard.js';



import mylogo from './mylogo.jpg';
import love from './icons/love.png';
import courage from './icons/Courage.png';
import peace from './icons/Peace.png';
import strenght from './icons/Strenght.png';
import happiness from './icons/Happiness.png';
import dream from './icons/Dream.png';

function App() {
  const [count, setCount] = useState(0);
  const  poem = "raw poem text here placeholder";
  const user = {
    firstName: 'Dhananjay',
    lastName: 'Ghevde',
  };
  const user1 = {
    img: "courage",
    firstName: 'Peter',
    lastName: 'Parker',
  };

  const user2 = {
    img: "love",
    firstName: 'Clark',
    lastName: 'Kent',
  };
  const user3 = {
    img: "peace",
    firstName: 'Bruce',
    lastName: 'Wyane',
  };

  function popelse(){
    alert('popelse ==> '+ user.firstName);
  }

  function pophaiku()
   {
      var oneS = ["true", "dark", "cold", "young", "great"];
      var twoS = ["visions", "distance", "conscience", "process", "chaos"];
      var threeS = ["ravishing", "amazing", "fanciful", "delightful", "delicate"];
      var fourS = ["superstitious", "continuous", "incapable", "contradicting", "overwhelming"];
      var fiveS = ["undeniable", "beautiful", "irreplaceable", "unbelievable", "irrevocable"];

      var num1=(Math.floor(Math.random()*10) % oneS.length);
      var num2a=(Math.floor(Math.random()*10) % twoS.length);
      var num2b=(Math.floor(Math.random()*10) % twoS.length);

      var num3=(Math.floor(Math.random()*10) % threeS.length);
      var num4=(Math.floor(Math.random()*10) % fourS.length);
      var num5=(Math.floor(Math.random()*10) % fiveS.length);

      //var personalize = " placem holdem";
      //personalize = document.getElementById("person").value;
     // alert(personalize)
      //var haiku =  "<p>"+  threeS[num3] + " " + twoS[num2a] + " </p><p> " + fourS[num4] + " " + oneS[num1] + " </p><p> " + twoS[num2b] + " " + personalize + " " + fiveS[num5] + " </p>";
      //var haiku =  "<p>"+  threeS[num3] + " " + twoS[num2a] + " </p><p> " + fourS[num4] + " " + oneS[num1] + " </p><p> " + twoS[num2b]  + " " + fiveS[num5] + " </p>";
      var haiku = threeS[num3] + " " + twoS[num2a] + '\n'  + fourS[num4] + " " + oneS[num1] + ' \n ' + twoS[num2b]  + " " + fiveS[num5];
      
      return haiku;

   }

return (
    
  <div>
      <Container>
      <Row>
        <Col>    
          <HaikuCard img={love} text={pophaiku()}/>
        </Col>

        <Col>    
          <HaikuCard  img={happiness}/>
            <InputGroup className="mb-3">
              <FormControl
              placeholder="Enter word Here !!"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
              <br/>
              <Button onClick={pophaiku()} variant="outline-secondary">Button</Button>
      
              </InputGroup.Append>
            </InputGroup> 
         </Col>
        <Col>    
          <HaikuCard  img={peace} text={pophaiku()}/>
          <HaikuCard  img={peace} text={pophaiku()}/>
          <HaikuCard  img={peace} text={pophaiku()}/>
        </Col>
      </Row>
      </Container>
  </div>
);


}

export default App;
