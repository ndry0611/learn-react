const Button = ({ text, onClick, counter }) => {
    const disable = (text != "Reset!") ? ((counter > 9 || counter < 0) ? true : false) : ((counter > 9 || counter < 0) ? false : true);
    const buttonStyle = (text != "Reset!") ? {} : { margin: 20, display: "block" }
    return (
        <button onClick={onClick} style={buttonStyle} disabled={disable}> {text} </button>
    )
}

export default Button;