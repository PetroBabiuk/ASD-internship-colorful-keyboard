import { createSelector } from "reselect";

const getKeys = ({ settings }) => settings.keyboard;
const showModal = ({ settings }) => settings.showModal;
const pressedButton = ({ settings }) => settings.pressedButton;

const getPressedButtonTitle = createSelector(
    [getKeys, pressedButton], (keys, button) => {
        const row = keys.find(row => row.includes(row.find(btn => btn.code === button)));
        if (row) {
            return row.find(btn => btn.code === button).title;
        }
        return '';
    },
);

const selectors = {
    getKeys,
    showModal,
    pressedButton,
    getPressedButtonTitle,
}

export default selectors;