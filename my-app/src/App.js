import './App.css';
import BottomBar from './components/Bottom-Bar/bottom-bar';
import { AboutMeFolderGroup } from './components/AboutMeFolderGroup/AboutMeFolderGroup';
import { MyComputerGroup } from './components/MyComputerGroup/MyComputerGroup';
import "98.css";
import Popup from 'reactjs-popup';
import { MyComputerPopUp} from './components/Popups/MyComputerPopUp/MyComputerPopUp';
import { AboutMePopUp } from './components/Popups/AboutMePopUp/AboutMePopUp';
import { MyProjectsGroup } from './components/MyProjectsFolderGroup/MyProjectsFolderGroup';
import { MyProjectsPopUp } from './components/Popups/MyProjectsPopUp/MyProjectsPopUp';
import { hitmeupGroup } from './components/hitmeupGroup/hitmeupGroup';
import { HitMeUpPopup } from './components/Popups/HitMeUpPopup/HitMeUpPopup';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <body>
          <div className='firstrow'>
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
        </div>
        <div className='secondRow'>
        <Popup
          trigger={MyProjectsGroup}
          modal
          contentStyle={{ width: '50vw',padding:'0' }} 
          closeOnDocumentClick
        >
          <MyProjectsPopUp  />
        </Popup>
        <Popup
          trigger={hitmeupGroup}
          modal
          contentStyle={{ width: '50vw',padding:'0' }} 
          closeOnDocumentClick
        >
          <HitMeUpPopup  />
        </Popup>
       
        </div>
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
