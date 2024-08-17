import './Bottom-Bar.css';
import startIcon from '../../assets/starticon.png';


export function BottomBar() {
    return (
      <div className="App-bottom-bar">
        <div className='start-button-container'>
        <button className='Bottom-bar-button'>
        <img src={startIcon} className='start-button-image' />
        </button>
        </div>       
      </div>
    ); 
  }
  export default BottomBar