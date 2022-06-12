import React from 'react';
import GoogleMapReact, { Coords, Position } from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

type SimpleMapProps = {
  center: Coords;
  zoom: number;
  heatMapPositions: Position[];
}
const SimpleMap: React.FunctionComponent<SimpleMapProps> = ({ center, zoom, heatMapPositions}) => {
  // static defaultProps = {
  //   center: {
  //     lat: 59.95,
  //     lng: 30.33
  //   },
  //   zoom: 11
  // };

  const heatMapData = {
    positions: heatMapPositions,
    options: {
      radius:20,
      opacity:0.6
    }

  };

  return (
    // Important! Always set the container height explicitly
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDxDYpXUqKYwX912SlJ8wea20_mVqmAvHQ" }}
        defaultCenter={center}
        defaultZoom={zoom}
        heatmapLibrary={true}
        heatmap={heatMapData}  
      >
      </GoogleMapReact>
  );
}

export default SimpleMap;