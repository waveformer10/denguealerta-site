import Layout from "./components/Layout";
import Lateral from "./components/Lateral";
import MessageData from "./components/MessageData";
import Usuario from "./components/Usuario";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { useEffect, useReducer, useState } from "react";
import ReactModal from "react-modal";

import "./App.css"
import 'leaflet/dist/leaflet.css';
import coordinateReducer, { CoordianteContext, defaultState, ACTIONS } from "./data/dataReducer";
import { db } from "./data/firebaseConfig"
import { collection, addDoc, Timestamp, query, orderBy, onSnapshot } from 'firebase/firestore'
import modalConfig from "./utilidades/modalConfig";

const daysToMs = (date) => {
  if(typeof date == 'number') {
    return 1000 * 60 * 60 * 24 * date;
  }
  return 0;
}

function App() {
  const [aberto, setAberto] = useState(false);
  const [state, dispatch] = useReducer(coordinateReducer, defaultState());
  
  // carregar pontos
  useEffect(() => {
    const q = query(collection(db, 'ocorrencias'));
    function load(){
      dispatch({ type: ACTIONS.LOADING, loading: true });
      onSnapshot(q, querySnapshot => {
        dispatch({ type: ACTIONS.LOADING, loading: false });
        dispatch({
          type: ACTIONS.RELOAD,
          coordinates: querySnapshot.docs.map(item => ({ id: item.id, ...item.data() })),
        });
      });
    }
    load();
    const interval = setInterval(load, 30000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <CoordianteContext.Provider value={{...state, dispatch}}>
      <div className="App" >
        <Usuario/>
        <Layout lateral={
          <>
            <Lateral />
            <nav>
              {
                state.coordinates
                  // .slice(0, 10)
                  .map(item => (
                    <MessageData
                      key={item.id}
                      onClick={() => {
                        setAberto(true);
                        dispatch({ type: ACTIONS.SELECT, selected: item });
                      }}
                      text={item.titulo}
                      newInfo={
                        item.createdAt 
                        && item.createdAt instanceof Date 
                        && item.createdAt >= new Date(new Date().getTime() - daysToMs(5)) 
                      }
                    />
                  ))
              }
            </nav>
          </>
          }>
          <MapContainer center={[-18.57500282606707, -46.514107349614726]} zoom={13} scrollWheelZoom={true} className="leaftlet-container">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              state.coordinates.map(item => {
                return (
                  <Marker position={[item.lat, item.lng]} key={item.id}>
                    <Popup>
                      <span
                        onClick={() => {
                          dispatch({ type: ACTIONS.SELECT, selected: item });
                          setAberto(true);
                        }}
                      >
                        {item.titulo}
                      </span>
                    </Popup>
                  </Marker>
                );
              })
            }
          </MapContainer>
        </Layout>
        <ReactModal
          isOpen={aberto}
          ariaHideApp={false}
          style={{...modalConfig}}
          shouldCloseOnOverlayClick={true}
          onRequestClose={() => {
            setAberto(false);
            dispatch({ type: ACTIONS.SELECT, selected: undefined });
          }}
        >
          <div className="box">
            <h1 className="texto">{state.selected?.titulo}</h1>
            <div className="mensagem">
              {state.selected?.descricao}
            </div>
          </div>
        </ReactModal>
      </div>
    </CoordianteContext.Provider>
  );
}

export default App;
