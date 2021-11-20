import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectors, actions } from './redux/keyboard';
import { mainKeys } from './utils/keyObjects';
import KeyBoard from './components/KeyBoard';
import Modal from './components/Modal';

import './App.css';
  
function App() {
  const [showModal, setShowModal] = useState(false);
  const [pressedButton, setPressedButton] = useState(null);
  const keyboard = useSelector(selectors.getKeys);
  const dispatch = useDispatch();

  useEffect(() => {
    const onKeypress = (e) => {
      e.preventDefault();
      console.log(e.key);
      openModal(e.key);
      setPressedButton(e.key.toLowerCase());
    };

  document.addEventListener('keydown', onKeypress);

  return () => {
    document.removeEventListener('keydown', onKeypress);
  };
  }, [dispatch]);

  const openModal = (key) => {
    setPressedButton(key);
    setShowModal(true);
  };
  
  const closeModal = () => {
    setShowModal(false);
    setPressedButton(null);
  };

  const submitModal = (color) => {
    closeModal();
    dispatch(actions.pressKey(pressedButton, color.hex));
  }

  const onReset = () => {
    dispatch(actions.resetDefault(mainKeys));
  }

  return (
    <div >
      {showModal && <Modal keyName={pressedButton} onClose={closeModal} onSubmit={(color)=> submitModal(color)}/>}
      <h1 style={{ textAlign: 'center'}}>Colorful keybord</h1>
      <div style={{
        display: 'flex',
        backgroundColor: 'grey'
      }}>
        <KeyBoard keys={keyboard} />
      </div>
      <button onClick={() => onReset()} type='button'>Reset settings</button>
    </div>
  );
}

export default App;
