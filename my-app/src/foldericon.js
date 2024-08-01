import Container from '@mui/material/Grid';

export function FolderGroup(){
    return(
        <Container className='Container-Properties'>
            <Foldericon></Foldericon>
            <FolderText></FolderText>
        </Container>
    )
} 

export function Foldericon(){
    return(
        <img src='https://win98icons.alexmeub.com/icons/png/directory_closed_cool-3.png'
        className='Folder-icon'
        alt='Folder icon'
        />
    )
}

export function FolderText(text){
    text = "About Me"
    return(
        <p className='FolderText'>
            {text}
        </p>
    )
}

