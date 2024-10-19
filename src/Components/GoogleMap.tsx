import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import Markers from "./Markers.tsx";




////API Key///////////
const API_KEY = 'AIzaSyDyFJl07pOphogij6mYHfO311l_LpvJ85g'


const GoogleMap = () => {
  
  

  return (
    //////////////////////////// Affichage de la carte GoogleMap///////////
     
    <APIProvider apiKey={API_KEY} libraries={['marker']} onLoad={() => console.log('Maps API has loaded.')}>

{/*En premier les markers pour que la légende soit en haut de la carte*/}
    
      <div className="checkboxes">
        <div class= "checkbox">
          <Markers  />
        </div>    
      </div>
      

{/*Ensuite la carte, avec une taille de 100% de largeur de l'écran et 100% de hauteur de l'écran */}
{/*Définition de la position par défaut du centre de la carte et du zoom par défaut, puis des options pour le mouvement de la carte */}
    
      <Map
        className="mapfull"
        defaultCenter={{lat:48.64627130950389,    lng: 1.8125529133067797}}
        defaultZoom={15.477}
        mapId={'d17a67bf932afd78'}
        gestureHandling={'greedy'}
        disableDefaultUI 
        /*Affichage dans la console des coordonnées du centre de la carte lors des mouvements */ 
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)}
        >       
      </Map>
      
    </APIProvider>
    
  );
};





export default GoogleMap;
