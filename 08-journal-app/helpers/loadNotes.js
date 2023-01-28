import { collection, getDocs } from "firebase/firestore/lite";
import { firebaseDB } from "../src/firebase/config";

export const loadNotes = async (uid = "") => {
  const collectionRef = collection(firebaseDB, `${uid}/journal/notes`);
  const docs = await getDocs(collectionRef);

  const notes = [];
  docs.forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};
