import { useContext } from 'react';
import './Lateral.css';
import BorderContext from '../contexts/border-context';

const Lateral = ()  => {
  const { expanded } = useContext(BorderContext);
  return (
    <div className="barra-lateral">
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2F2018%2F1216143_hatsune-miku-hachune-miku-vocaloid-hd-png-download.png&f=1&nofb=1&ipt=30c181d1d517b50e9739ec936f243700487a83ae45644698eafe1253c25032fe&ipo=images" alt="icon" className="icon"/>
      <h1 className={'title ' + (!expanded && 'expanded')}>DENGUE<br/>ALERTA</h1>
    </div>
  )
}

export default Lateral;