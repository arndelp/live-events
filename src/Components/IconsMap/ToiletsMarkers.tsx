import React from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';



type Poi ={ key: string, location: google.maps.LatLngLiteral , title: string}

export const locationsToilets: Poi[] = [
  {key: 'Toilet 1', location: { lat: 48.647333645559215,lng: 1.8149296229995675
  },title: "Sanitaires scène 1"},
  {key: 'Toilet 2', location: { lat: 48.64709761471343,lng:  1.8145376530262565  }, title: "Sanitaires scène 2"},
 
];  


const ToiletsMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <img src='../assets/toilettes.png ' width="20em" height= "20em"/>     
           
                     
          </AdvancedMarker>
        ))}
      </>
    );
  };


  export default ToiletsMarkers ;