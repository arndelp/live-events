import React from "react";
import { useLocation } from "react-router-dom";


{/*Utilisation de la méthose useLocation de react router pour récupérer les données de Programme */}

export default function ProgrammeDetails () {
  const location = useLocation();
  
  const name = location.state.name;
  const day = location.state.day;
  const place = location.state.location

  const details = location.state.details

  return (
    <div>
      <h1>Details</h1>
      
      <div>Name: {name}</div>
      <div>Lieu: {place}</div>
      <div>Détails: {details}</div>
    </div>
  )
}




