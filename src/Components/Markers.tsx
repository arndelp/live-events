import React from "react"
import { useState, useEffect, useCallback } from "react";
import {AdvancedMarker, InfoWindow, useAdvancedMarkerRef} from '@vis.gl/react-google-maps';
import "../style/Markers.css";
import { Link } from "react-router-dom";


                                                        /* Affichage des Markers*/

/*Récupération des coordonées des bars du fichier JSON */


<<<<<<< HEAD
const  Markers = () => {
=======
const Markers = () => {
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
/* La constante bars est vide à l'initiale */
  const [bars, setBars] = useState([])
/*envoi une requête et récupération des données dans 'dataMap.json' puis les stockent dans bars avec setBars*/
    useEffect(()=>{
     fetch('dataMap.json')
     .then(response=>response.json())
     .then(data=>setBars(data.bars))
     .catch(error => console.log(error))     
   },[]);
/*idem pour parkings */
  const [parkings, setParkings] = useState([])
   useEffect(()=>{
     fetch('dataMap.json')
     .then(response=>response.json())
     .then(data=>setParkings(data.parkings))
     .catch(error => console.log(error))     
   },[]);
/*idem pour scenes */
  const [scenes, setScenes] = useState([])
    useEffect(()=>{
      fetch('dataMap.json')
      .then(response=>response.json())
      .then(data=>setScenes(data.scenes))
      .catch(error => console.log(error))     
    },[]);
/*idem pour exits */
  const [exits, setExits] = useState([])
    useEffect(()=>{
     fetch('dataMap.json')
     .then(response=>response.json())
     .then(data=>setExits(data.exits))
     .catch(error => console.log(error))     
   },[]);
/*idem pour toilets */
  const [toilets, setToilets] = useState([])
    useEffect(()=>{
      fetch('dataMap.json')
      .then(response=>response.json())
      .then(data=>setToilets(data.toilets))
      .catch(error => console.log(error))     
    },[]);
/*idem pour camping */
  const [camping, setCamping] = useState([])
    useEffect(()=>{
      fetch('dataMap.json')
      .then(response=>response.json())
      .then(data=>setCamping(data.camping))
      .catch(error => console.log(error))     
    },[]);

/*Utilisation de la méthode map() pour transformer les données, puis les affilier à un composant google map AdvancedMarker */
  const ValMarkers = (props: {pois: Poi[]}) => {
  return (
    <>
      {props.pois.map( (Val: Poi) => (
        <AdvancedMarker
          key={Val.key}
          position={Val.location}>
<<<<<<< HEAD
          <img src={Val.image} width={Val.width} height={Val.height} alt="marker" />                 
=======
          <img src={Val.image} width={Val.width} height={Val.height} alt="marker"/>                 
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
        </AdvancedMarker>
      ))}
    </>
  );
};

  /*Utilisation de la méthode map() pour transformer les données, puis les affilier à un composant google map AdvancedMarker */
/*Markers avec infoWindow */
const MarkerWithInfoWindow = (props: {pois: Poi[]}) => {
  // `markerRef` and `marker` are needed to establish the connection between
  // the marker and infowindow (if you're using the Marker component, you
  // can use the `useMarkerRef` hook instead).
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [infoWindowShown, setInfoWindowShown] = useState(false);

  // clicking the marker will toggle the infowindow
  const handleMarkerClick = useCallback(
    () => setInfoWindowShown(isShown => !isShown),
    []
  );

  // if the maps api closes the infowindow, we have to synchronize our state
  const handleClose = useCallback(() => setInfoWindowShown(false), []);

  return (

    <>
    {props.pois.map( (Val: Poi) => (
      <AdvancedMarker
        key={Val.key}
        ref={markerRef}
        position={Val.location}
        onClick={handleMarkerClick}>
        <img src={Val.image} width={Val.width} height={Val.height} alt="marker"/>
        </AdvancedMarker>
        
      
    ))}

  
      {infoWindowShown && (
        
        <InfoWindow anchor={marker} onClose={handleClose}>
          <h2>Voir la programmation</h2>
          <Link to= "/Programmation">
          <p>Cliquez içi </p>
          </Link>
        </InfoWindow>
        )}

    </>
  );
};




<<<<<<< HEAD
/* fonction d'affichage des icônes handleChange...*/{/*Affichage par défaut: true, Cache des icones lors du click  */
=======
/* fonction d'affichage des icônes handleChange...*/
/*Affichage par défaut: true, Cache des icones lors du click  */
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
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

/*Un composant par type d'icone */
/*Bars */
const ResultsBar=() => (
  <ValMarkers   
  pois={bars}   
  /> 
 )

/*Parking */
const ResultsPark=() => (
  <ValMarkers   
  pois={parkings}   
  /> 
 )

 /*Scènes */
 const ResultsScenes=() => (
  <MarkerWithInfoWindow   
  pois={scenes}   
  /> 
 )

 /*Sorties */
 const ResultsExit=() => (
  <ValMarkers   
  pois={exits}   
  /> 
 )

 /*Toilettes */
 const ResultsToilet=() => (
  <ValMarkers   
  pois={toilets}   
  /> 
 )

/*Camping*/
const ResultsCamp=() => (
  <ValMarkers
  pois={camping}
  />
)

  return (
    <>    
{/*Affichage conditionnel ds icones avec une checkbox une checkbox (Appel du composant des icones + fonction d'affichage/cache des icones handleChange...*/} 
    <div className="legend">
     <div className="ico">
          <input type="checkbox" checked={showResultsBars} onChange={handleChangeBars} />
          { showResultsBars ? <ResultsBar /> : null }
<<<<<<< HEAD
          <img src="../assets/bars.png" width="25em" height= "25em" alt="Bar"/> 
=======
          <img src="../assets/bars.png" width="25em" height= "25em" alt="icone bar"/> 
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsPark} onChange={handleChangePark} />
          { showResultsPark ? <ResultsPark /> : null }
<<<<<<< HEAD
          <img src="../assets/parking.png" width="20em" height= "20em" alt="Park"/> 
=======
          <img src="../assets/parking.png" width="20em" height= "20em" alt="icone parking"/> 
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
      </div>
      <div className="ico">
          <input type="checkbox" checked={showResultsScenes} onChange={handleChangeScenes} />
          { showResultsScenes ? <ResultsScenes /> : null }
<<<<<<< HEAD
          <img src="../assets/scene.png" width="25em" height= "25em" alt="Scène"/>
=======
          <img src="../assets/scene.png" width="25em" height= "25em" alt="icone scene"/>
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsExit} onChange={handleChangeExit} />
          { showResultsExit ? <ResultsExit /> : null }
<<<<<<< HEAD
          <img src="../assets/entrer.png" width="25em" height= "25em" alt="Exit"/>
=======
          <img src="../assets/entrer.png" width="25em" height= "25em" alt="icone exit"/>
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsCamp} onChange={handleChangeCamp} />
          { showResultsCamp ? <ResultsCamp /> : null }
<<<<<<< HEAD
          <img src="../assets/camping.png" width="25em" height= "25em" alt="Camping"/>
=======
          <img src="../assets/camping.png" width="25em" height= "25em" alt="icone camping"/>
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
      </div>  
      <div className="ico">
          <input type="checkbox" checked={showResultsToilet} onChange={handleChangeToilet} />
          { showResultsToilet ? <ResultsToilet /> : null }
<<<<<<< HEAD
          <img src="../assets/toilettes.png" width="25em" height= "25em" alt="Toilets"/>
=======
          <img src="../assets/toilettes.png" width="25em" height= "25em" alt="icone toilette"/>
>>>>>>> 2d2e4a85df3c8767c4e40239a02f7192882554c9
      </div>  
    </div> 
    </>
  );
};
}
export default Markers;



    