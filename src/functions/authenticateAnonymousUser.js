import { signInAnonymously } from "firebase/auth";

import { auth } from "../firebase";

const authenticateAnonymousUser = async () => {
    try {
        const user = await signInAnonymously(auth);
        const uid = user.user.uid;
        return uid;
        
    } catch (error) {
        console.log("An error was raised in authenticateAnonymousUser.js: ", error.message);
        return;
    }
};

export default authenticateAnonymousUser;