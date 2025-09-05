import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from '../utlis/firebase';
import { background } from '../utlis/profileStyles';

const wishesCollection = collection(db, "wishes");

export const addWish = async (name, message, attendance) => {
  const randomIndex = Math.floor(Math.random() * background.length);
  return await addDoc(wishesCollection, {
    created_at: serverTimestamp(),
    name,
    message,
    // attendance,
    randomIndex
  });
};  
export const subscribeWishes = (callback) => {
  const wishesQuery = query(
    wishesCollection,
    orderBy("created_at", "desc"),
  );

  const unsub = onSnapshot(wishesQuery, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    callback(data);
  });

  return unsub; 
};
