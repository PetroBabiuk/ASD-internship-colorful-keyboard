import ButtonsRow from "../ButtonsRow";

const KeyBoard = ({ keys }) => {

    
    return (
        <div style={{
            width: '800px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            {keys.map((row, index) =>
                <ButtonsRow key={index} keys={row} />
            )}
        </div>
    );
}

export default KeyBoard;