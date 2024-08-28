import "./MyComputerPopUp.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.js"
import { toggleFullScreen } from "../../ButtonFunctionalities/ButtonFunctionalities.js"

export function MyComputerPopUp({closeTab}){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">More About YOUR Computer</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" className='maximise' onClick={() => toggleFullScreen("window")} />
            <button aria-label="Close" onClick = {closeTab}/>
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
            <p>Not Cool Computer</p>
          </div>
        </div>
      </div>

    
    
    
    )
}

