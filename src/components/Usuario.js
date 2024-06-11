import { useContext } from 'react';
import BorderContext from '../contexts/border-context';
import './Usuario.css';
import { useState } from "react";
import ReactModal from "react-modal";
import more from './img/more.png';
import perfil from './img/perfil.jpg';
import modalConfig from '../utilidades/modalConfig';
const Usuario = (props) => {
    const [aberto, setAberto] = useState(false);
    return (
        <div>
            <img src={more} className='more' alt="more" onClick={() => {setAberto(true);}}></img>
            <ReactModal
                isOpen={aberto}
                ariaHideApp={false}
                style={modalConfig}
                shouldCloseOnOverlayClick={true}
                onRequestClose={() => setAberto(false)}
            >
                <div>
                    <h1>Conta</h1>
                    <img src={perfil} className='perfil' alt='JorgeADM' />
                    <h1>Endereco de Email</h1>
                    <p>batata10@exemplo.com</p>
                </div>
            </ReactModal>
        </div>
    );
}
    

export default Usuario;