import { createAction } from '@reduxjs/toolkit';

const pressKey = createAction('keyboard/press', (code, color) => ({
    payload: {
        code,
        color,
    }
}));

const resetDefault = createAction('keyboard/reset', (config) => ({
    payload: {
        config
    }
}));

const showModal = createAction('modal/show', (bool) => ({
    payload: {
        bool,
    }
}));

const pressButton = createAction('button/press', (code) => ({
    payload: {
        code
    }
}));

const actions = {
    pressKey,
    resetDefault,
    showModal,
    pressButton
}

export default actions;