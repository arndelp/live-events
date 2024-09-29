import React from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';



type Poi ={ key: string, location: google.maps.LatLngLiteral , title: string}

export const locationsParkings: Poi[] = [
  {key: 'Parking 1', location: { lat: 48.648460697389204,lng:  1.817590374250487  },title: "Parking 1"},
  {key: 'Parking 2', location: { lat: 48.64546934730316,lng:  1.8100158162539175  }, title: "Parking 2"},
 

 
];  


const ParkingsMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <img src='../assets/parking.png ' width="25rem" height= "25rem"/>     
           
                     
          </AdvancedMarker>
        ))}
      </>
    );
  };


  export default ParkingsMarkers ;