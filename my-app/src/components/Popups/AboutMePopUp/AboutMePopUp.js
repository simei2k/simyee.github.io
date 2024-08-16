import "./AboutMePopUp.css"

export function AboutMePopUp(){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">Stats</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
           <p>Sim Yee</p>
           <p>Cyber Enthusiast</p>
           <b>Strengths</b>
           <ul class="tree-view">
            <li>Proactive</li>
            <li>Handle Stress Well</li>
            <li>Good Time Management</li>
          </ul>
          <br />
            <b>Weaknesses</b>
           <ul class="tree-view">
            <li>Competitive</li>
            <li>Cannot say no</li>
            <li>Good Time Management</li>
           </ul>
           <p></p>
          </div>
        </div>
      </div>
    )
}