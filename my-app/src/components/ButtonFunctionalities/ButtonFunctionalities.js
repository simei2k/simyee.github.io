export function toggleFullScreen(elementClassName) {
    const element = document.getElementsByClassName(elementClassName)[0];
    const isMaximized = element.classList.contains("maximized");
  
    if (isMaximized) {
      element.classList.remove("maximized");
      element.style.height = ''; // Reset height
      element.style.width = '';
    } else {
      element.classList.add("maximized");
    }
  }


  export const closeTab = (id, tabs, setTabs) => {
    setTabs(tabs.filter(tab => tab.id !== id));
  };