import "./AboutMePopUp.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.js"
import { toggleFullScreen } from "../../ButtonFunctionalities/ButtonFunctionalities.js"

export function AboutMePopUp({closeTab}){
  
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Stats</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" className='minimise' />
            <button aria-label="Maximize" className='maximise' onClick={() => toggleFullScreen("window")}/>
            <button aria-label="Close" className='Close' onClick = {closeTab}/>
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
          
           <ul className="tree-view">
            Lim Sim Yee
            <br/>
            Year 2 Information Systems Student
            <br/>
            Majoring in Digitalisation and Cloud Solutions + Cybersecurity
            <li><b>Strengths</b>
              <ul>
                <li>Good Stress Management</li>
                <li>Good Time Management</li>
                <li>Proactive</li>
              </ul>
            </li>
            <li><b>Weaknesses</b>
              <ul>
                <li>Competitive</li>
                <li>No hobbies</li>
                <li>oops</li>
              </ul>
            </li>
            <li></li>
            <li></li>
          </ul>
          </div>
        </div>
      </div>
    )
}