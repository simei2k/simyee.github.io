import './App.css';
import BottomBar from './components/Bottom-Bar/bottom-bar.js';
import { AboutMeFolderGroup } from './components/AboutMeFolderGroup/AboutMeFolderGroup.js';
import { MyComputerGroup } from './components/MyComputerGroup/MyComputerGroup.js';
import "98.css";
import Popup from 'reactjs-popup';
import {MyComputerPopUp} from './components/MyComputerPopUp/MyComputerPopUp.js';
import { AboutMePopUp } from './components/AboutMePopUp/AboutMePopUp.js';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <body>
        <Popup
          trigger={MyComputerGroup}
          modal
          contentStyle={{ width: '50vw ', padding:'0' }} 
          closeOnDocumentClick
        >
          <MyComputerPopUp />
        </Popup>
        <Popup
          trigger={AboutMeFolderGroup}
          modal
          contentStyle={{ width: '50vw',padding:'0' }} 
          closeOnDocumentClick
        >
          <AboutMePopUp  />
        </Popup>
      </body>
      </header>
      <div className='Bottom-Container'>
      <BottomBar>  
      </BottomBar>
      </div>
     
    </div>
    
  );
}



export default App;
