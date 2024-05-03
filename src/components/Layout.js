import { useState } from 'react';
import  './Layout.css'
import BorderContext from '../contexts/border-context';

const Layout = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <BorderContext.Provider value={{ expanded : expanded, setExpanded: setExpanded }}>
      <div className="layout-container">
        <div className='layout-lateral' onClick={() => setExpanded(true)}>
            {
              expanded && (
                <div className='layout-backdrop' onClick={(event) => {
                  event.stopPropagation();
                  setExpanded(false);
                }}></div>
              )
            }
            <div className={'layout-lateral-content ' + (expanded ? 'expanded' : '') }>
                { props.lateral }
            </div>
        </div>
        <div className='layout-component'>
            { props.children }
        </div>
      </div>
    </BorderContext.Provider>
  )
}

export default Layout;