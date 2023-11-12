import { firestore } from '../firebase';
import { doc, setDoc } from "firebase/firestore";

const writeToFirestore = async ( uid, name, email, company ) => {
    try {
        await setDoc(doc(firestore, "users", uid), {
            name: name,
            email: email,
            company: company,
        });

    } catch (error) {
        console.log(error);
        return;
    }
};

export default writeToFirestore;