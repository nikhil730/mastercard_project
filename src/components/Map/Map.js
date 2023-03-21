import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "600px",
};

const center = {
  lat: 28.7041,
  lng: 77.1025,
};
const markers = [
  {
    lat: 28.7041,
    lng: 77.1025,
  },
  {
    lat: 19.7515,
    lng: 75.7139,
  },
  {
    lat: 32.1024,
    lng: 77.5619,
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB5SZNGhV6C6m7MPwdtqiUJb7uAVeodPRk",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={2}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map((mark) => {
        console.log(markers[0]);
        console.log(mark);
        return (
          <Marker
            position={mark}
            icon={
              "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            }
          />
        );
      })}
      {/* <Marker
        position={markers[0]}
        icon={
          "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
        }
        onClick={handleclick}
      /> */}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
