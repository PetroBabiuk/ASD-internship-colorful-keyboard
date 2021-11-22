import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { selectors } from '../../redux/keyboard';
import Button from '../Button';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ code, onClose, onSubmit }) => {
    const [color, setColor] = useColor("hex", "#417e7c");
    const keyTitle = useSelector(selectors.getPressedButtonTitle);

    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return (createPortal(
        <div className='Overlay'
            onClick={handleOverlayClick}>
            <div className='Modal' >
                <h1
                    className='title'>
                    {`You clicked on button ${code.toUpperCase()} !`}
                </h1>
                <p
                    className='title'>
                    Please choose color for that button
                </p>
                <ColorPicker
                    width={456}
                    height={228}
                    color={color}
                    onChange={setColor}
                    hideHSV dark />
                <button
                    className='ConfirmButton'
                    onClick={() => onSubmit(color)}
                    type='button'>
                    Confirm
                </button>
            </div>
            <div className='Preview'>
                <Button code={code} title={keyTitle} color={color.hex} />
            </div>
        </div>, modalRoot));
    
}

export default Modal;