import React from "react";
import {AdvancedMarker } from '@vis.gl/react-google-maps';



type Poi ={ key: string, location: google.maps.LatLngLiteral , title: string}

export const locationsExits: Poi[] = [
  {key: 'Exit 1', location: { lat: 48.647657122855406,lng:  1.815491457154483  },title: "Exit 1"},
  {key: 'Exit 2', location: { lat: 48.646402458672014,lng:  1.8140859796791988  }, title: "Exit 2"},
  {key: 'Exit 3', location: { lat: 48.6474870007277,lng:  1.814053793172131  }, title: "Exit 3"},

 
];  


const ExitsMarkers = (props: {pois: Poi[]}) => {
    return (
      <>
        {props.pois.map( (poi: Poi) => (
          <AdvancedMarker
            key={poi.key}
            position={poi.location}>
            <img src='../assets/entrer.png ' width="25rem" height= "25rem"/>     
           
                     
          </AdvancedMarker>
        ))}
      </>
    );
  };


  export default ExitsMarkers ;