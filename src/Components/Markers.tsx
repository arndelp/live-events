import React, {useCallback, useState, useEffect} from 'react';


import {
  AdvancedMarker,
  AdvancedMarkerAnchorPoint,
  AdvancedMarkerProps,
  APIProvider,
  InfoWindow,
  Map,
  Pin,
  useAdvancedMarkerRef,
  CollisionBehavior
} from '@vis.gl/react-google-maps';
import './style.css';
import ControlPanel from './control-panel';

export type AnchorPointName = keyof typeof AdvancedMarkerAnchorPoint;


/////////////////////////////////////////////////////////////////////////////////////////
type MarkerData = {
  id: number;
  position: google.maps.LatLngLiteral;
  type: string;
  zIndex: number;
  info: string;
   
};


///////////////////////////////////////////////////////////////////////////////////
export default function Markers  ()  {
 function GetData() {
  const [data, setData] = useState<MarkerData[]>([]);

  useEffect(() => {
    const api = async () => {
      const result = await fetch("http://127.0.0.1:8000/api/markers", {
        method: "GET"
      });
      const jsonData = await result.json();
                setData(jsonData);
    };

    api();
  }, []);

 
console.log(data)
  return data;
}

////////////////////////////////////////////////////////////////////////////////





const data = GetData()
  .sort((a, b) => b.position.lat - a.position.lat)
  .map((dataItem, index) => ({...dataItem, zIndex: index}));






const Z_INDEX_SELECTED = data.length;
const Z_INDEX_HOVER = data.length + 1;

const API_KEY = 'AIzaSyDyFJl07pOphogij6mYHfO311l_LpvJ85g'


   


  const [markers] = useState(data);
  
  const [hoverId, setHoverId] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const [anchorPoint, setAnchorPoint] = useState('BOTTOM' as AnchorPointName);
  const [selectedMarker, setSelectedMarker] =
    useState<google.maps.marker.AdvancedMarkerElement | null>(null);
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const onMouseEnter = useCallback((id: number | null) => setHoverId(id), []);
  const onMouseLeave = useCallback(() => setHoverId(null), []);
  const onMarkerClick = useCallback(
    (id: number | null, marker?: google.maps.marker.AdvancedMarkerElement) => {
      setSelectedId(id);

      if (marker) {
        setSelectedMarker(marker);
      }

      if (id !== selectedId) {
        setInfoWindowShown(true);
      } else {
        setInfoWindowShown(isShown => !isShown);
      }
    },
    [selectedId]
  );

  const onMapClick = useCallback(() => {
    setSelectedId(null);
    setSelectedMarker(null);
    setInfoWindowShown(false);
  }, []);

  const handleInfowindowCloseClick = useCallback(
    () => setInfoWindowShown(false),
    []
  );

  return (
    <APIProvider apiKey={API_KEY} libraries={['marker']}>
      <Map
        mapId={'d17a67bf932afd78'}
        defaultZoom={15.477}
        defaultCenter={{lat: 48.64627130950389, lng: 1.8125529133067797}}
        gestureHandling={'greedy'}
        onClick={onMapClick}
        clickableIcons={false}
        disableDefaultUI>
        {markers.map(({id, zIndex: zIndexDefault, position, type}) => {
          let zIndex = zIndexDefault;

          if (hoverId === id) {
            zIndex = Z_INDEX_HOVER;
          }

          if (selectedId === id) {
            zIndex = Z_INDEX_SELECTED;
          }

          if (type === 'BAR') {
            return (
              <AdvancedMarkerWithRef
                onMarkerClick={(
                  marker: google.maps.marker.AdvancedMarkerElement
                ) => onMarkerClick(id, marker)}
                onMouseEnter={() => onMouseEnter(id)}
                onMouseLeave={onMouseLeave}
                key={id}
                zIndex={zIndex}
                className="custom-marker"
                style={{
                  transform: `scale(${[hoverId, selectedId].includes(id) ? 1.3 : 1})`,
                  transformOrigin: AdvancedMarkerAnchorPoint['BOTTOM'].join(' ')
                }}
                position={position}>
                <Pin
                  background={selectedId === id ? '#22ccff' : null}
                  borderColor={selectedId === id ? '#1e89a1' : null}
                  glyphColor={selectedId === id ? '#0f677a' : null}
                />
              </AdvancedMarkerWithRef>
            );
          }

          if (type === 'SCENE') {
            return (
              <React.Fragment key={id}>
                <AdvancedMarkerWithRef
                  position={position}
                  zIndex={zIndex}
                  anchorPoint={AdvancedMarkerAnchorPoint[anchorPoint]}
                  className="custom-marker"
                  style={{
                    transform: `scale(${[hoverId, selectedId].includes(id) ? 1.3 : 1})`,
                    transformOrigin:
                      AdvancedMarkerAnchorPoint[anchorPoint].join(' ')
                  }}
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(id, marker)}
                  onMouseEnter={() => onMouseEnter(id)}
                  collisionBehavior={
                    CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY
                  }
                  onMouseLeave={onMouseLeave}>
                  <div
                    className={`custom-html-content ${selectedId === id ? 'selected' : ''}`}></div>
                </AdvancedMarkerWithRef>

                {/* anchor point visualization marker */}
                <AdvancedMarkerWithRef
                  onMarkerClick={(
                    marker: google.maps.marker.AdvancedMarkerElement
                  ) => onMarkerClick(id, marker)}
                  zIndex={zIndex + 1}
                  onMouseEnter={() => onMouseEnter(id)}
                  onMouseLeave={onMouseLeave}
                  anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
                  position={position}>
                  <div className="visualization-marker"></div>
                </AdvancedMarkerWithRef>
              </React.Fragment>
            );
          }
        })}

        {infoWindowShown && selectedMarker && (
          <InfoWindow
            anchor={selectedMarker}
            pixelOffset={[0, -2]}
            onCloseClick={handleInfowindowCloseClick}>
            <h2>Marker {selectedId}</h2>
            <p>Some arbitrary html to be rendered into the InfoWindow.</p>
          </InfoWindow>
        )}
      </Map>
      <ControlPanel
        anchorPointName={anchorPoint}
        onAnchorPointChange={(newAnchorPoint: AnchorPointName) =>
          setAnchorPoint(newAnchorPoint)
        }
      />
    </APIProvider>
  );
};

export const AdvancedMarkerWithRef = (
  props: AdvancedMarkerProps & {
    onMarkerClick: (marker: google.maps.marker.AdvancedMarkerElement) => void;
  }
) => {
  const {children, onMarkerClick, ...advancedMarkerProps} = props;
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <AdvancedMarker
      onClick={() => {
        if (marker) {
          onMarkerClick(marker);
        }
      }}
      ref={markerRef}
      {...advancedMarkerProps}>
      {children}
    </AdvancedMarker>
  );
 
};






