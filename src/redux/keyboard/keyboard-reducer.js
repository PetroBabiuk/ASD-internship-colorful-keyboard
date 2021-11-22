import { combineReducers } from "redux";
import { mainKeys } from '../../utils/keyObjects';
import { createReducer} from "@reduxjs/toolkit";
import actions from "./keyboard-actions";

const initialMainKeyboardState =  [...mainKeys] ;

const keyboard = createReducer(initialMainKeyboardState, {
    [actions.pressKey]: (state, { payload }) => {
        state.map((row) => row.map(key => {
            if (key.code === payload.code) {
                key.color = payload.color;
                return key;
            }
            return key;
        }));
        return state;
    },
    [actions.resetDefault]: (state, { payload }) => {
        return payload.config;
    }
});

const showModal = createReducer(false, {
    [actions.showModal]: (state, { payload }) => {
        return payload.bool;
    }
})

const pressedButton = createReducer(null, {
    [actions.pressButton]: (state, { payload }) => {
        return payload.code;
    }
})

export default combineReducers({
    keyboard,
    showModal,
    pressedButton,
});
