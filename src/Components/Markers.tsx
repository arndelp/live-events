
import React from "react"
import { useState, useEffect } from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';
import "../style/Markers.css";


                                                        {/* Affichage des Markers*/}

{/*Récupération des coordonées des bars du fichier JSON */}


const Markers = () => {

  const [bars, setBars] = useState([])
{/*envoi une requête et récupération des données dans 'dataMap.json' puis les stockent dans bars avec setBars*/}
    useEffect(()=>{
     fetch('dataMap.json')
     .then(response=>response.json())
     .then(data=>setBars(data.bars))
     .catch(error => console.log(error))     
   },[]);
{/*idem pour parkings */}
  const [parkings, setParkings] = useState([])
   useEffect(()=>{
     fetch('dataMap.json')
     .then(response=>response.json())
     .then(data=>setParkings(data.parkings))
     .catch(error => console.log(error))     
   },[]);
{/*idem pour scenes */}
  const [scenes, setScenes] = useState([])
    useEffect(()=>{
      fetch('dataMap.json')
      .then(response=>response.json())
      .then(data=>setScenes(data.scenes))
      .catch(error => console.log(error))     
    },[]);
{/*idem pour exits */}
  const [exits, setExits] = useState([])
    useEffect(()=>{
     fetch('dataMap.json')
     .then(response=>response.json())
     .then(data=>setExits(data.exits))
     .catch(error => console.log(error))     
   },[]);
{/*idem pour toilets */}
  const [toilets, setToilets] = useState([])
    useEffect(()=>{
      fetch('dataMap.json')
      .then(response=>response.json())
      .then(data=>setToilets(data.toilets))
      .catch(error => console.log(error))     
    },[]);
{/*idem pour camping */}
  const [camping, setCamping] = useState([])
    useEffect(()=>{
      fetch('dataMap.json')
      .then(response=>response.json())
      .then(data=>setCamping(data.camping))
      .catch(error => console.log(error))     
    },[]);

{/*Utilisation de la méthode map() pour transformer les données, puis les affilier à un composant google map AdvancedMarker */}
   const ValMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (Val: Poi) => (
          <AdvancedMarker
            key={Val.key}
            position={Val.location}>
            <img src={Val.image} width={Val.width} height={Val.height} />                 
          </AdvancedMarker>
        ))}
      </>
    );
  };

{/* fonction d'affichage des icônes*/}
{/*Affichage par défaut: true, Cache des icones lors du click  */}
const [showResultsBars, setShowResultsBars] = React.useState(true)
const handleChangeBars  = () => setShowResultsBars(!showResultsBars)

const [showResultsPark, setShowResultsPark] = React.useState(true)
const handleChangePark  = () => setShowResultsPark(!showResultsPark)

const [showResultsScenes, setShowResultsScenes] = React.useState(true)
const handleChangeScenes  = () => setShowResultsScenes(!showResultsScenes)

const [showResultsCamp, setShowResultsCamp] = React.useState(true)
const handleChangeCamp  = () => setShowResultsCamp(!showResultsCamp)

const [showResultsExit, setShowResultsExit] = React.useState(true)
const handleChangeExit  = () => setShowResultsExit(!showResultsExit)

const [showResultsToilet, setShowResultsToilet] = React.useState(true)
const handleChangeToilet  = () => setShowResultsToilet(!showResultsToilet)

{/*Un composant par type d'icone */}
{/*Bars */}
const ResultsBar=() => (
  <ValMarkers   
  pois={bars}   
  /> 
 )

{/*Parking */}
const ResultsPark=() => (
  <ValMarkers   
  pois={parkings}   
  /> 
 )

 {/*Scènes */}
 const ResultsScenes=() => (
  <ValMarkers   
  pois={scenes}   
  /> 
 )

 {/*Sorties */}
 const ResultsExit=() => (
  <ValMarkers   
  pois={exits}   
  /> 
 )

 {/*Toilettes */}
 const ResultsToilet=() => (
  <ValMarkers   
  pois={toilets}   
  /> 
 )

{/*Camping*/}
const ResultsCamp=() => (
  <ValMarkers
  pois={camping}
  />
)

  return (
    <>    
{/*Affichage conditionnel ds icones gràce à une checkbox (Appel du composant des icone + fonction d'affichage/cache des icones*/} 
    <div className="legend">
     <div className="ico">
          <input type="checkbox" checked={showResultsBars} onChange={handleChangeBars} />
          { showResultsBars ? <ResultsBar /> : null }
          <img src="../assets/bars.png" width="25em" height= "25em"/> 
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsPark} onChange={handleChangePark} />
          { showResultsPark ? <ResultsPark /> : null }
          <img src="../assets/parking.png" width="20em" height= "20em"/> 
      </div>
      <div className="ico">
          <input type="checkbox" checked={showResultsScenes} onChange={handleChangeScenes} />
          { showResultsScenes ? <ResultsScenes /> : null }
          <img src="../assets/scene.png" width="25em" height= "25em"/>
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsExit} onChange={handleChangeExit} />
          { showResultsExit ? <ResultsExit /> : null }
          <img src="../assets/entrer.png" width="25em" height= "25em"/>
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsCamp} onChange={handleChangeCamp} />
          { showResultsCamp ? <ResultsCamp /> : null }
          <img src="../assets/camping.png" width="25em" height= "25em"/>
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsToilet} onChange={handleChangeToilet} />
          { showResultsToilet ? <ResultsToilet /> : null }
          <img src="../assets/toilettes.png" width="25em" height= "25em"/>
      </div>  
    </div> 
    </>
  );
};
   
export default Markers



    