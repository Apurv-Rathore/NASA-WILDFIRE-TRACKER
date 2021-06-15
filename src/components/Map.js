import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";

const Map = ({ eventData, center, zoom }) => {
  const eventMarkers = eventData.map((data) => {
    if (data.categories[0].id === 8 || data.categories[0].id === 10) {
      return (
        <LocationMarker
          lat={data.geometries[0].coordinates[1]}
          lng={data.geometries[0].coordinates[0]}
          type={data.categories[0].id}
        ></LocationMarker>
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCzDoeDy1SH-BYVf7pwDdw3t_ahm7QOCYU" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
          {eventMarkers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
};

export default Map;
