import { atom } from "recoil";

const testState = atom({
    key: 'testState', // unique ID (with respect to other atoms/selectors)
    default: 0, // default value (aka initial value)
});
export default testState;