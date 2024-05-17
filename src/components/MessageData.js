import { useContext } from 'react';
import BorderContext from '../contexts/border-context';
import './MessageData.css';

const mkClasses = (...values) => values.filter(value => !!value).join(' ');

const MessageData = ({ newInfo, text, children, onClick }) => {
  const { expanded } = useContext(BorderContext);
  return (
    <div className={mkClasses('message-data', newInfo && 'new-info', expanded && 'expanded')} onClick={onClick}>
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