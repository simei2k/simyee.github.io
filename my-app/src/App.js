import './App.css';
import BottomBar from './components/Bottom-Bar/bottom-bar.js';
import { AboutMeFolderGroup } from './components/AboutMeFolderGroup/AboutMeFolderGroup.js';
import { MyComputerGroup } from './components/MyComputerGroup/MyComputerGroup.js';
import "98.css";
import Popup from 'reactjs-popup';
import {MyComputerPopUp} from './components/MyComputerPopUp/MyComputerPopUp.js';
import { AboutMePopUp } from './components/AboutMePopUp/AboutMePopUp.js';
import avatar from './assets/pixel_avatar.png'




function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <body>
        <Popup
          trigger={MyComputerGroup}
          position="center center"
          closeOnDocumentClick
        >
          <MyComputerPopUp />
        </Popup>
        <Popup
          trigger={AboutMeFolderGroup}
          position="center center"
          closeOnDocumentClick
        >
          <AboutMePopUp  />
        </Popup>
      </body>
      <div className='AvatarContainer'><img src={avatar} className='MyAvatar' /></div>
      
      </header>
      
      <BottomBar>  
      </BottomBar>
    </div>
    
  );
}



export default App;
