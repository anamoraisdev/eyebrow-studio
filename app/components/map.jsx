import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;

const Map = () => {
  return (
    <MapContainer center={[-22.561172847629436, -41.98168981981352]} zoom={13} style={{ height: '400px', width: '80%' , zIndex: "20" }} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[-22.561172847629436, -41.98168981981352]}>
        <Popup>
          Salao ster maria
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;



