import { useDispatch } from 'react-redux';
import { actions } from '../../redux/keyboard';

const Button = ({ code, title, color }) => {
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(actions.pressButton(e.target.name));
        dispatch(actions.showModal(true));
    }

    return (
        <button
            type='button'
            onClick={(e) => handleClick(e)}
            id={code}
            name={code}
            value={color}
            className='KeyButton'
            style={{boxShadow: `0 0.2em 0 0.05em ${color}`, color: color}}
        >
            {title}
        </button>
    );
}

export default Button;