import Container from '@mui/material/Container';
import Computer from '../assets/mycomputericon.png'



export function MyComputerGroup(){
    function getComputerStats(){
        alert("Here are some stats about my computer")
    }
    return(
        <Container className='Computer-Container-Properties' maxWidth={false} onclick={getComputerStats}>
            <ComputerIcon onclick={getComputerStats}></ComputerIcon>
            <ComputerText></ComputerText>
        </Container>
    )
} 

export function ComputerIcon(){
    return(
        <img src={Computer}
        className='Folder-icon'
        alt='Computer icon'
        />
    )
}

export function ComputerText(text){
    text = "My Computer"
    return(
        <p className='FolderText'>
            {text}
        </p>
    )
}

