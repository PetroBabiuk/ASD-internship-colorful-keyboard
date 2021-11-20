import { combineReducers } from "redux";
import { mainKeys } from '../../utils/keyObjects';
import { createReducer} from "@reduxjs/toolkit";
import actions from "./keyboard-actions";

const initialState =  [...mainKeys] ;

const keyboard = createReducer(initialState, {
    [actions.pressKey]: (state, { payload }) => {
        state.map((row) => row.map(key => {
            if (key.name === payload.name) {
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

export default combineReducers({
    keyboard,
});
