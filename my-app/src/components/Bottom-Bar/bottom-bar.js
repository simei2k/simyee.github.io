import './Bottom-Bar.css';
import startIcon from '../../assets/starticon.png';
import "98.css";


export function BottomBar({tabs}) {
    return (
      <div className="App-bottom-bar">
        <div className='start-button-container'>
        <button className='Bottom-bar-button'>
        <img src={startIcon} className='start-button-image' />
        </button>
        <menu role="tablist">
        {tabs.map(tab => (
         <li role="tab"><div key={tab.id} className="tab">
           {tab.title}
        </div></li>
      ))}
      </menu>
        </div>       
      </div>
    ); 
  }
  export default BottomBar