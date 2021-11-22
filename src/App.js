import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectors, actions } from "./redux/keyboard";
import { mainKeys } from "./utils/keyObjects";
import KeyBoard from "./components/KeyBoard";
import Modal from "./components/Modal";

import "./App.css";
import { rainbowState } from "./utils/Rainbow";

function App() {
  const showModal = useSelector(selectors.showModal);
  const pressedButton = useSelector(selectors.pressedButton);
  const keyboard = useSelector(selectors.getKeys);
  const dispatch = useDispatch();

  useEffect(() => {
    const openModal = (key) => {
      dispatch(actions.pressButton(key));
      dispatch(actions.showModal(true));
    };

    const onKeypress = (e) => {
      e.preventDefault();
      console.log(e);
      openModal(e.code);
      dispatch(actions.pressButton(e.code));
    };

    document.addEventListener("keydown", onKeypress);

    return () => {
      document.removeEventListener("keydown", onKeypress);
    };
  }, [dispatch]);

  const closeModal = () => {
    dispatch(actions.showModal(false));
    dispatch(actions.pressButton(null));
  };

  const submitModal = (color) => {
    closeModal();
    dispatch(actions.pressKey(pressedButton, color.hex));
  };

  const onReset = () => {
    dispatch(actions.resetDefault(mainKeys));
  };

  const onRainbow = () => {
    dispatch(actions.resetDefault(rainbowState));
  };

  return (
    <div>
      {showModal && (
        <Modal
          code={pressedButton}
          onClose={closeModal}
          onSubmit={(color) => submitModal(color)}
        />
      )}
      <h1 className="title">Colorful keybord</h1>
      <div className="App">
        <KeyBoard keys={keyboard} />
      </div>
      <div style={{ display: "flex" }}>
        <button className="ResetButton" onClick={() => onReset()} type="button">
          Reset settings
        </button>
        <button
          className="ResetButton"
          onClick={() => onRainbow()}
          type="button"
        >
          See rainbow!
        </button>
      </div>
    </div>
  );
}

export default App;
