import Container from '@mui/material/Container';
import Computer from '../../assets/mycomputericon.png'
import Popup from 'reactjs-popup';
import "./MyComputerGroup.css"


export function MyComputerGroup(){
    return(
        <Container className='Computer-Container-Properties' maxWidth={false}>
            <ComputerIcon/>
            <ComputerText />
        </Container>
    )
} 

export function ComputerIcon(){
    return(
        <img src={Computer}
        className='Computer-icon'
        alt='Computer icon'
        />
    )
}

export function ComputerText(text){
    text = "My Computer"
    return(
        <p className='ComputerText'>
            {text}
        </p>
    )
}

