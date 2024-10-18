import "../style/MapFull.css";
import {Map, APIProvider} from '@vis.gl/react-google-maps';






function MapMini(){

const API_KEY = 'AIzaSyDyFJl07pOphogij6mYHfO311l_LpvJ85g'

  

  return (
   
    <div style={{ height: '50vh', width: '50%' }}>
          <APIProvider apiKey={API_KEY} libraries={['marker']} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        style={{width: '50vw', height: '50vh'}}
        defaultCenter={{lat: 48.6482188624956, lng: 1.8178017118278378
        }}
        defaultZoom={16.038999999999987}
        mapId={'d17a67bf932afd78'}
        gestureHandling={'greedy'}
        disableDefaultUI            
            
      >
           
      </Map>
    </APIProvider>
    </div>
  );
}
export default MapMini

