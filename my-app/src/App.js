import logo from './assets/logo.svg';
import './App.css';
import BottomBar from './components/bottom-bar.js';
import { AboutMeFolderGroup } from './components/AboutMeFolderIcon.js';
import { MyComputerGroup } from './components/MyComputerGroup.js';
import iloveket from './assets/iloveket.png'
import "98.css";


function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <body>
        <MyComputerGroup />
       <AboutMeFolderGroup />
       
        </body>
      
      </header>
      <BottomBar>  
      </BottomBar>
    </div>
    
  );
}



export default App;
