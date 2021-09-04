import React, {
  useState, useCallback, useEffect,
} from 'react';
import {
  Button,
} from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, addDoc, onSnapshot, query, orderBy, deleteDoc, getDocs,
} from 'firebase/firestore';

export default function ChatScreen({ navigation, route }) {
  const [messages, setMessages] = useState([]);
  // need to receive other person's uid (which is their email)
  const contact = route.params?.contact ? route.params?.contact : 'fairyinbottle@gmail';

  const firebaseConfig = {
    apiKey: 'AIzaSyBjro67Rf_Y2diw602gk5uVQcABE0nhT-g',
    authDomain: 'safe-haven-4131e.firebaseapp.com',
    databaseURL: 'https://safe-haven-4131e-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'safe-haven-4131e',
    storageBucket: 'safe-haven-4131e.appspot.com',
    messagingSenderId: '440482454181',
    appId: '1:440482454181:web:9c4fa813db716c5fac0b4c',
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

  let chatID = null;

  const myUserProfile = {
    // _id: auth?.currentUser?.email,
    // name: auth?.currentUser?.displayName,
    _id: 'jerry@nus',
    name: 'Jerry',
  };

  const getChatID = () => {
    const myID = myUserProfile._id;
    const contactID = contact;
    const chatIDpre = [];
    chatIDpre.push(myID);
    chatIDpre.push(contactID);
    chatIDpre.sort();
    // join both person's ID, sort it and that will be the collection ID (should be unique)
    return chatIDpre.join('_');
  };

  useEffect(() => {
    const id = getChatID();
    chatID = id;
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
    const {
      _id,
      createdAt,
      text,
      user,
    } = messages[0];

    try {
      const docRef = addDoc(collection(db, chatID), {
        _id,
        createdAt,
        text,
        user,
      });
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }, []);

  useEffect(() => {
    const q = query(collection(db, chatID), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (querySnapshot) => {
      //
      setMessages(
        querySnapshot.docs.map((miniDoc) => ({
          _id: miniDoc.data()._id,
          createdAt: miniDoc.data().createdAt.toDate(),
          text: miniDoc.data().text,
          user: miniDoc.data().user,
        })),
      );
    });
    return unsub;
  }, []);

  const deleteCollection = (collectionID) => {
    const q = query(collection(db, chatID));
    const querySnapshot = getDocs(q);
    querySnapshot.forEach((doc) => {
      deleteDoc(doc);
    });
  };

  const handleEndChat = () => {
    setMessages([]);
    // remove conversation
    deleteCollection(chatID);
    navigation.navigate('Home');
  };

  return (
    <>
      <Button title="End Chat" onPress={() => handleEndChat()} />
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={myUserProfile}
        renderUsernameOnMessage
        keyboardShouldPersistTaps="never"
      />
    </>
  );
}
