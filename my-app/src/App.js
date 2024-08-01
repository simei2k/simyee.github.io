import logo from './assets/logo.svg';
import './App.css';
import BottomBar from './bottom-bar.js';
import {FolderGroup} from './foldericon.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FolderGroup></FolderGroup>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Portfolio Page</h1>
      </header>
      <BottomBar>  
      </BottomBar>
    </div>
    
  );
}



export default App;
