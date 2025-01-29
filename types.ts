export type PostProps = Array<{
    id: number;
    position: google.maps.LatLngLiteral;
    type: 'SCENE' | 'BAR';
    zIndex: number;
  }>;

 