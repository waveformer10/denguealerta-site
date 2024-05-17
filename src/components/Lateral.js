import { useContext } from 'react';
import './Lateral.css';
import BorderContext from '../contexts/border-context';
import logo from './LogoDA.png';

const Lateral = ()  => {
  const { expanded } = useContext(BorderContext);
  return (
    <div className="barra-lateral">
      <img src={logo} alt="logo" className="logo"/>
      <h1 className={'title ' + (!expanded && 'expanded')}>DENGUE<span style={{color:"red"}}>ALERTA</span></h1>
    </div>
  )
}

export default Lateral;