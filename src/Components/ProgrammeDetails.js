import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../style/Programme.css";



/*Utilisation de la méthose useLocation de react router pour récupérer les données de Programme */

export default function ProgrammeDetails () {
  const location = useLocation();
  
  const name = location.state.name;
  const day = location.state.day;
  const place = location.state.location
  const imageId = location.state.imageId
  const details = location.state.details
  const details2 = location.state.details2



  const navigate = useNavigate();
  return (
    <>
    <div className="row">
     
      <div class= "col-12 bigCard">
    
   
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={`../assets/${imageId}.jpg`}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {day}
        </Card.Text>
        <Card.Text>
          {place}
        </Card.Text>
        <Card.Text>
          {details}
        </Card.Text>
        <Card.Text>
          {details2}
        </Card.Text>

{/*Bouton Retour, utilisation de la méthode react useNavigate */}
        <Button variant="primary" onClick={() => navigate(-1)}>Retour</Button>
      </Card.Body>
    </Card>
    </div>
    
    </div>
    
        </>
  )
}




