import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import "./Map.css";
import location from "../Data/Data";
import markerimg from "./marker.png";
import { useHistory } from "react-router-dom";

const containerStyle = {
  width: "675px",
  height: "575px",
};

const center = {
  lat: 28.7041,
  lng: 77.1025,
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
    map.setZoom(4);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const history = useHistory();
  const handleclick = (e) => {
    console.log("hello");
    // e.preventDefault();
    history.push("/description");
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName="map"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={4}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {location.map((mark) => {
        return (
          <Marker onClick={handleclick} position={mark} icon={markerimg} />
        );
      })}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
