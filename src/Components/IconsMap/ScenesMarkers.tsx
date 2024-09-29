import React from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';



type Poi ={ key: string, location: google.maps.LatLngLiteral , title: string}

export const locationsScenes: Poi[] = [
  {key: 'Scene 1', location: { lat: 48.64939007376746,lng:  1.815133972632164  },title: "Scène 1"},
  {key: 'Scene 2', location: { lat: 48.64676680373308,lng:  1.8116805604899497  }, title: "Scène 2"},
 
];  


const ScenesMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <img src='../assets/scene.png ' width="55em" height= "55em"/>     
           
                     
          </AdvancedMarker>
        ))}
      </>
    );
  };


  export default ScenesMarkers ;