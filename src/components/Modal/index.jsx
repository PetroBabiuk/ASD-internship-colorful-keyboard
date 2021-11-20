import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ keyName, onClose, onSubmit }) => {
    const [color, setColor] = useColor("hex", "#121212");
    
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);


    const handleOverlayClick = e => {
        if (e.currentTarget === e.target) {
            onClose();
        }
    };

    return (createPortal(
        <div style={{
            position: 'fixed',
            top: '0',
            left: '0',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: '1200',
        }}
            onClick={handleOverlayClick}>
            <div style={{
                maxWidth: '500px',
                maxHeight: '700px',
                paddingTop: '22px',
                paddingLeft: '22px',
                paddingRight: '22px',
                paddingBottom: '22px',
                borderRadius: '20px',
                backgroundColor: 'grey',
                color: 'white',
            }}>
                <h1
                    style={{ textAlign: 'center' }}>
                    {`You clicked on button ${keyName.toUpperCase()} !`}
                </h1>
                <p
                    style={{ textAlign: 'center' }}>
                    Please choose color for that button
                </p>
                <ColorPicker
                    width={456}
                    height={228}
                    color={color}
                    onChange={setColor}
                    hideHSV dark />
                <button
                    style={{
                        display: 'block',
                        width: '200px',
                        height: '40px',
                        marginTop: '20px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginBottom: '20px',
                        textTransform: 'uppercase',
                        backgroundColor: '#100f0f',
                        color: 'white',
                        borderRadius: '8px',
                    }}
                    onClick={() => onSubmit(color)}
                    type='button'>
                    Confirm
                </button>
            </div>
        </div>, modalRoot));
    
}

export default Modal;