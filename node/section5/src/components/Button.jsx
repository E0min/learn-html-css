export default function Button({text,color,children}) {
    function onClickButton(e){
        console.log(e)
    } 
    return(
        <button 
            onClick={onClickButton} 
            style={{color : color}}
            >
            {text} - {color.toUpperCase()}
            {children}
        </button>
    );
}

Button.defaultProps ={
	color:"white"
};