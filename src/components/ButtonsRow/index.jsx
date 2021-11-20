import Button from "../Button";

const ButtonsRow = ({keys}) => {

    return (
        <ul style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '10px',
            marginBootom: '0',
            marginLeft: '0',
            paddingLeft: '20px',
            paddingRight: '20px'
        }}>
            {keys && keys.map(key => 
                <Button
                    key={key.name}
                    name={key.name}
                    title={key.title}
                    color={key.color}
                />
            )}
        </ul>
    )
}

export default ButtonsRow;