import "./MyProjectsPopUp.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.css"
import "../../ButtonFunctionalities/ButtonFunctionalities.js"
import { toggleFullScreen } from "../../ButtonFunctionalities/ButtonFunctionalities.js"

export function MyProjectsPopUp(){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Personal Projects</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" className='maximise' onClick={() => toggleFullScreen("window")}/>
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
          <ul class="tree-view">
      <li><b>WINDOWS 98 Profile Page</b>
      <ul>
        <li>React Web App</li>
        <li>Web APIs</li>
      </ul>
      
    </li>
    <li>
      <b>BBDC Practical Slots Booking Bot</b>
      <ul>
        <li>Python</li>
        <li>Selenium Webdriver</li>
        <details closed>
        <summmary>
          <ul>
          <li>Utilised Selenium Webdriver to book driving practical slots from BBDC website</li>
          <li>Reduced waiting time by 99%</li>
          <li>Check it out here <a><button href='https://github.com/simei2k/bbdc-booking-bot' target='_blank' >BBDC Bot Repo</button></a></li>
          </ul>
        </summmary>
        </details>
      </ul>
    </li>
    
    <li><b>FarmFinds</b></li>
    <ul>
        <li>Flutter</li>
        <li>Dart</li>
        <details closed>
        <summmary>
          <ul>
          <li>Worked in a team of 4 during the Google Ignite program hosted by SMU WiT (Women in Tech) and in collaboration with Google</li>
          <li>Developed an app the addresses UN Sustainability Development Goals 12: Responsible Consumption and Production </li>
          <li>Farmfinds was developed using Flutter and Dart to connect consumers and farms, allowing farms to expand their reach and sell their extra crops to different consumers instead of only supermarkets</li>
          <li>Check it out here <a><button href='https://github.com/SSSamueLDS/googleignite_team7' target='_blank' >FarmFinds Repo</button></a></li>
          </ul>
        </summmary>
        </details>
      </ul>
      
  </ul>
            </div>
          </div>
        </div>

    
    
    
    )
}
