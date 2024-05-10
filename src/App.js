import Layout from "./components/Layout";
import Lateral from "./components/Lateral";
import MessageData from "./components/MessageData";
import "./App.css"
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

function App() {
  return (
    <div className="App" >
      
      <Layout lateral={
        <>
          <Lateral />
          <nav>
            <MessageData text={'Hello world 1'} newInfo={true} />
            <MessageData text={'Hello world 2'} newInfo={false} />
          </nav>
        </>
        }>
        <MapContainer center={[-18.57500282606707, -46.514107349614726]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-18.57500282606707, -46.514107349614726]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Layout>
    </div>
  );
}

export default App;
