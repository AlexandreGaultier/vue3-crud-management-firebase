import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, addDoc, getDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, onUnmounted } from 'vue'

const config = {
    //config firebase
  };

  const firebaseApp = initializeApp(config)

  const db = getFirestore(firebaseApp)
  const usersCollection = collection(db, 'users')
  
  export const createUser = (user) => {
    return addDoc(usersCollection, user)
  }

  export const getUser = async id => {
    const user = await getDoc(doc(usersCollection, id))
    return user.exists ? user.data() : null
  }

  export const updateUser = (id, user) => {
    return updateDoc(doc(usersCollection, id), user)
  }

  export const deleteUser = (id) => {
    return deleteDoc(doc(usersCollection, id))
  }

  export const useLoadUsers = () => {
    const users = ref([])
    const close = onSnapshot(usersCollection, snapshot => {
        users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return users 
  }
  
  
