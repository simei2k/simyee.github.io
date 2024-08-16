import "./MyProjectsPopUp.css"
export function MyProjectsPopUp(){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Personal Projects</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
          <ul class="tree-view">
      <li><b>WINDOWS 98 Profile Page</b>
      <ul>
        <li>React Web App</li>
      </ul>
      
    </li>
    <li>
      BBDC Practical Slots Booking Bot
      <ul>
        <li>Python</li>
        <li>Selenium Webdriver</li>
        <details closed>
        <summmary>
          <ul>
          <li>Utilised Selenium Webdriver to book driving practical slots from BBDC website</li>
          <li>Reduced waiting time by 99%</li>
          </ul>
        </summmary>
        </details>
      </ul>
    </li>
    
    <li>FarmFinds</li>
    <ul>
        <li>Flutter</li>
        <li>Dart</li>
        <details closed>
        <summmary>
          <ul>
          <li>Worked in a team of 4 during the Google Ignite program hosted by SMU WiT (Women in Tech) and in collaboration with Google</li>
          <li>Developed an app the addresses UN Sustainability Development Goals 12: Responsible Consumption and Production </li>
          <li>Farmfinds was developed using Flutter and Dart to connect consumers and farms, allowing farms to expand their reach and sell their extra crops to different consumers instead of only supermarkets</li>
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
