
import "../style/MapFull.css";
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import DisplayBarMarkers from "./IconsMap/DisplayBarMarkers.tsx";
import DisplayToiletsMarkers from "./IconsMap/DisplayToiletsMarkers.tsx";
import DisplayScenesMarkers from "./IconsMap/DisplayScenesMarkers.tsx";
import DisplayExitsMarkers from "./IconsMap/DisplayExitsMarkers.tsx";
import DisplayParkingsMarkers from "./IconsMap/DisplayParkingsMarkers.tsx";
import DisplayCampingMarkers from "./IconsMap/DisplayCampingMarkers.tsx";
import Markers from "./Markers.tsx";



////API Key///////////
const API_KEY = 'AIzaSyDyFJl07pOphogij6mYHfO311l_LpvJ85g'






const MapFull = () => {
  
  

  return (
    //////////////////////////// Affichage de la carte GoogleMap///////////
     
    <APIProvider apiKey={API_KEY} libraries={['marker']} onLoad={() => console.log('Maps API has loaded.')}>

{/*En premier les markers pour que la légende soit en haut de la carte*/}
    <div class="checkboxes">
      <div class= "checkbox">
        <Markers  />
      </div>
      {/*<div class= "checkbox">
        <DisplayToiletsMarkers />
      </div>
      <div class= "checkbox">
        <DisplayScenesMarkers />
      </div>
      <div class= "checkbox">
        <DisplayExitsMarkers />
      </div>
      <div class= "checkbox">
        <DisplayParkingsMarkers />
      </div>
      <div class= "checkbox">
        <DisplayCampingMarkers />
      </div> */}
    </div>

{/*Ensuite la carte, avec une taille de 100% de largeur de l'écran et 100% de hauteur de l'écran */}
{/*Définition de la position par défaut du centre de la carte et du zoom par défaut, puis des options pour le mouvement de la carte */}
      <Map
        style={{width: '100vw', height: '100vh'}}
        defaultCenter={{lat:48.64729693345926,    lng: 1.8137467314846414
        }}
        defaultZoom={16.038999999999987}
        mapId={'d17a67bf932afd78'}
        gestureHandling={'greedy'}
        disableDefaultUI 
        /*Affichage dans la console des coordonnées du centre de la carte lors des mouvements */ 
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }    
        >        
      </Map>
    </APIProvider>
    
  );
};





export default MapFull;
