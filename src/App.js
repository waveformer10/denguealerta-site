import Layout from "./components/Layout";
import Lateral from "./components/Lateral";
import MessageData from "./components/MessageData";
import Usuario from "./components/Usuario";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useState } from "react";
import ReactModal from "react-modal";

import "./App.css"
import 'leaflet/dist/leaflet.css';

const customStyles = {
  modal : {
    position: 'absolute',
    top: '80px',
    left: '80px',
    right: '80px',
    bottom: '80px', //setar largura e altura
  },
  overlay : {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '100000',
    backgroundColor: '#0009',
  }
};

function App() {
  const [aberto, setAberto] = useState(false);
  return (
    <div className="App" >
      <Usuario/>
      <Layout lateral={
        <>
          <Lateral />
          <nav>
            <MessageData onClick={() => {
              setAberto(true);
            }} text={'Hello world 1'} newInfo={true} />
            <MessageData text={'Hello world 2'} newInfo={false} />
          </nav>
        </>
        }>
        <MapContainer center={[-18.57500282606707, -46.514107349614726]} zoom={13} scrollWheelZoom={false} className="leaftlet-container">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-18.57500282606707, -46.514107349614726]}>
            <Popup>
              DENGUE AQUI
            </Popup>
          </Marker>
        </MapContainer>
      </Layout>
      <ReactModal
        isOpen={aberto}
        ariaHideApp={false}
        style={customStyles}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => setAberto(false)}
      >
        <div className="box">
          <h1 className="texto">Roberto Dias</h1>
          <h2 className="texto">Rua TATATA, 55</h2>
          <div className="mensagem">
            Mensagem aqui...
          </div>
        </div>
      </ReactModal>
    </div>
  );
}

export default App;
