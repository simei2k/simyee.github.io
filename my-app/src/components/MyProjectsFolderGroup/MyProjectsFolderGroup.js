import Container from '@mui/material/Container';
import Popup from 'reactjs-popup';
import "./MyProjectsFolderGrp.css"


export function MyProjectsGroup(){
    return(
        <div className='Project-Container-Properties' >
            <ProjectIcon/>
            <ProjectsText />
        </div>
    )
} 

export function ProjectIcon(){
    return(
        <img src='https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png'
        className='Project-icon'
        alt='Project icon'
        />
    )
}

export function ProjectsText(text){
    text = "My Projects"
    return(
        <p className='ProjectText'>
            {text}
        </p>
    )
}