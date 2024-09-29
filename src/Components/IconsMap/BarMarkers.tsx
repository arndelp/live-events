import React from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';



type Poi ={ key: string, location: google.maps.LatLngLiteral , title: string}

export const locationsBars: Poi[] = [
  {key: 'Bar 1', location: { lat: 48.6480495744828,lng:  1.8157557433476355  },title: "Bar scène 1"},
  {key: 'Bar 2', location: { lat: 48.645888305467395,lng:  1.812579226760014  }, title: "Bar scène 2"},
 
];  


const BarMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <img src='../assets/cocktail.png ' width="25rem" height= "25rem"/>     
           
                     
          </AdvancedMarker>
        ))}
      </>
    );
  };


  export default BarMarkers ;