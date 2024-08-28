import './App.css';
import React, { useState } from 'react';
import BottomBar from './components/Bottom-Bar/bottom-bar';
import { AboutMeFolderGroup } from './components/AboutMeFolderGroup/AboutMeFolderGroup';
import { MyComputerGroup } from './components/MyComputerGroup/MyComputerGroup';
import "98.css";
import { MyComputerPopUp} from './components/Popups/MyComputerPopUp/MyComputerPopUp';
import { AboutMePopUp } from './components/Popups/AboutMePopUp/AboutMePopUp';
import { MyProjectsGroup } from './components/MyProjectsFolderGroup/MyProjectsFolderGroup';
import { MyProjectsPopUp } from './components/Popups/MyProjectsPopUp/MyProjectsPopUp';
import { HitMeUpGroup } from './components/HitMeUpGroup/HitMeUpGroup';
import { HitMeUpPopup } from './components/Popups/HitMeUpPopup/HitMeUpPopup';

function App() {
//state to manage open tabs
  const [tabs, setTabs] = useState([]);

  const addTab = (id,title,content) =>{
    if (!tabs.some(tab => tab.id === id)){
      setTabs([...tabs, {id, title, content}]);
    }
  }
  //got error, for my computer and about me cannot close
  const closeTab = (id) => {
    console.log("Closing tab with id:", id);
    console.log("Current tabs:", tabs);
    setTabs(tabs.filter(tab => tab.id !== id));
    console.log("Updated tabs:", tabs);
  }

  return (
    <div className="App"> 
      <header className="App-header">
        <body>
          <div className='first-row'>
            <div onClick={()=> addTab(1,'My Computer', <MyComputerPopUp closeTab={() => closeTab(1)} />)}>
            <MyComputerGroup />
            </div>
        <div onClick={() => addTab(2, 'About Me', <AboutMePopUp closeTab={() => closeTab(2)} />)}>
            <AboutMeFolderGroup />
          </div>
        </div>
        <div className='second-row'>
          <div onClick={() => addTab(3, 'My Projects', <MyProjectsPopUp closeTab={() => closeTab(3)} />)}>
            <MyProjectsGroup />
          </div>
          
          <div onClick={() => addTab(4, 'Hit Me Up', <HitMeUpPopup closeTab={() => closeTab(4)} />)}>
            <HitMeUpGroup />
          </div>
       
        </div>
      </body>
      </header>
      <div className='Bottom-Container'>
      <BottomBar tabs={tabs} closeTab={closeTab}>  
      </BottomBar>
      </div>

      {tabs.map(tab => (
        <div key={tab.id} className='popup'>
          {tab.content}
          </div>
      ))}
     
    </div>
    
  );
}



export default App;
