import Button from "../Button";

const ButtonsRow = ({keys, row}) => {

    return (
        <ul row={row} className='ButtonRow'>
            {keys && keys.map(key =>
                <Button
                    key={key.code}
                    code={key.code}
                    title={key.title}
                    color={key.color}
                />
            )}
        </ul>
    );
}

export default ButtonsRow;