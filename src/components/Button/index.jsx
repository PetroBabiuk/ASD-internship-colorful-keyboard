const Button = ({ name, title, color }) => {

    return (
        <button
            type='button'
            name={name}
            color={color}
            style={{
                color: 'white',
                backgroundColor: color,
                borderColor: color,
                minWidth: '40px',
                minHeight: '40px',
                borderRadius: '5px'
            }}>
            {title}
        </button>
    );
}

export default Button;