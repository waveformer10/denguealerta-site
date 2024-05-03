import { useContext } from 'react';
import './MessageData.css';
import BorderContext from '../contexts/border-context';

const mkClasses = (...values) => values.filter(value => !!value).join(' ');

const MessageData = ({ newInfo, text, children }) => {
  const { expanded } = useContext(BorderContext);
  return (
    <div className={mkClasses('message-data', newInfo && 'new-info', expanded && 'expanded')}>
      {
        newInfo && (
          <div className='red-ball'></div>
        )
      }
      {
        expanded && (
          <>
            { text && <p>{text}</p> }
            { children }
          </>
        )
      }
    </div>
  )
}

export default MessageData;