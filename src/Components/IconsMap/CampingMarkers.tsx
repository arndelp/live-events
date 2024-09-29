import React from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';



type Poi ={ key: string, location: google.maps.LatLngLiteral , title: string}

export const locationsCamping: Poi[] = [
  {key: 'Camping', location: { lat: 48.64549770213722,lng:  1.807601828007549  },title: "Camping"},
  
 
];  


const CampingMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <img src='../assets/camping.png ' width="35rem" height= "35rem"/>     
           
                     
          </AdvancedMarker>
        ))}
      </>
    );
  };


  export default CampingMarkers ;