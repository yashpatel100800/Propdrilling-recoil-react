import { atom } from "recoil";

const notificationsState = atom({
    key: "notificationsState",
    default: {
        home: 0,
        network: 0,
        message: 0,
        profile: 0,
    },
});

export default notificationsState;
