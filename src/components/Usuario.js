import { useContext } from 'react';
import BorderContext from '../contexts/border-context';
import './Usuario.css';
import { useState } from "react";
import ReactModal from "react-modal";
import more from './img/more.png';
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
const Usuario = (props) => {
    const [aberto, setAberto] = useState(false);
    return (
        <div>
            <img src={more} className='more' alt="perfil" onClick={() => {setAberto(true);}}></img>
            <ReactModal
                isOpen={aberto}
                ariaHideApp={false}
                style={customStyles}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setAberto(false)}
            >
            </ReactModal>
        </div>
    );
}
    

export default Usuario;