import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import "./Map.css";
import Data from "../Data/Data";
import markerimg from "./marker.png";
import { useHistory, useLocation } from "react-router-dom";

const containerStyle = {
  width: "675px",
  height: "575px",
};

const center = {
  lat: 31.7041,
  lng: 29.1025,
};

// console.log(process.env.REACT_APP_API_KEY);
console.log(process.env.REACT_APP_API_KEY);
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    map.setZoom(1);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const history = useHistory();
  const handleclick = (props) => {
    console.log(props);

    history.push({
      pathname: "/description",
      state: {
        from: "map",
        name: props.name,
        description: props.description,
        lat: props.lat,
        lng: props.lng,
      },
    });
  };

  const location = useLocation();

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={1}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {Data.map((name) => {
        return (
          <Marker
            onClick={() =>
              handleclick({
                name: name.name,
                description: name.description,
                lat: name.lat,
                lng: name.lng,
              })
            }
            position={name}
            icon={markerimg}
          />

          // <Marker onClick={handleclick} position={name} icon={markerimg} />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
