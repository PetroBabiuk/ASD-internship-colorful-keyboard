import { createAction } from '@reduxjs/toolkit';

const pressKey = createAction('keyboard/press', (name, color) => ({
    payload: {
        name,
        color,
    }
}));

const resetDefault = createAction('keyboard/reset', (config) => ({
    payload: {
        config
    }
}));

const actions = {
    pressKey,
    resetDefault,
}

export default actions;