import ButtonsRow from "../ButtonsRow";

const KeyBoard = ({ keys }) => {
    
    return (
        <div className='Keyboard'>
            {keys.map((row, index) =>
                <ButtonsRow key={index} keys={row} row={index} />
            )}
        </div>
    );
}

export default KeyBoard;