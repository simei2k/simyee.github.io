import "./MyComputerPopUp.css"
export function MyComputerPopUp(){
    return (
        <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">More About YOUR Computer</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
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

