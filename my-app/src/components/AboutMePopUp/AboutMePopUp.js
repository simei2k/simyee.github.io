export function AboutMePopUp(){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">More About ME</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
  
        <div className="window-body">
          <div className="field-row" style={{ justifyContent: "center" }}>
           <p>Name: Sim Yee </p>
           <p></p>
           <p></p>
          </div>
        </div>
      </div>
    )
}