import "./HitMeUpPopup.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.js"
import { toggleFullScreen } from "../../ButtonFunctionalities/ButtonFunctionalities.js"

export function HitMeUpPopup(){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Connect With Me!</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" className='maximise' onClick={() => toggleFullScreen("window")} />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
          <ul class="tree-view">
            <li><a href='https://www.linkedin.com/in/lim-sim-yee/' target= "blank"><button>LinkedIn</button></a></li>
            <li><a href='https://github.com/simei2k' target= "blank"><button>GitHub</button></a></li>
            <li><a href='mailto:simyee.lim.2023@scis.smu.edu.sg' target= "blank"><button>Email</button></a></li>
        </ul>
          </div>
        </div>
      </div>

    
    
    
    )
}

