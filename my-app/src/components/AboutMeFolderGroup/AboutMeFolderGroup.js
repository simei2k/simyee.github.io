import "./AboutMeFolderGroup.css"

export function AboutMeFolderGroup(){
    return(
        <div className='Folder-Container-Properties' minWidth={false} maxWidth={false}>
            <TextEditorIcon />
            <FolderText></FolderText>
        </div>
    )
} 

export function TextEditorIcon(){
    return(
        <img src='https://win98icons.alexmeub.com/icons/png/notepad_file-2.png'
        className='Folder-icon'
        alt='Folder icon'
        />
    )
}

export function FolderText(text){
    text = "AboutMe.Txt"
    return(
        <p className='FolderText'>
            {text}
        </p>
    )
}

