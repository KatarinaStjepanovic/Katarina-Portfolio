  
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getDatabase, ref, set, get, push, onValue,child, remove , update} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  

/*const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  databaseURL: process.env.FIREBASE_DATABASE_URL
};*/

const firebaseConfig = {
  apiKey: "AIzaSyAWURFUNo0W2xHiuXsNVokbTi50-2LomH8",
  authDomain: "katarina-portfolio.firebaseapp.com",
  projectId: "katarina-portfolio",
  storageBucket: "katarina-portfolio.appspot.com",
  messagingSenderId: 1009796328455,
  appId: "1:1009796328455:web:801ec752be5d8d04438ea2",
  databaseURL: "https://katarina-portfolio-default-rtdb.europe-west1.firebasedatabase.app"
};

/*FIREBASE_API_KEY=AIzaSyAWURFUNo0W2xHiuXsNVokbTi50-2LomH8
FIREBASE_AUTH_DOMAIN=katarina-portfolio.firebaseapp.com
FIREBASE_PROJECT_ID=katarina-portfolio
FIREBASE_STORAGE_BUCKET=katarina-portfolio.appspot.com
FIREBASE_MESSAGING_SENDER_ID=1009796328455
FIREBASE_APP_ID=1:1009796328455:web:801ec752be5d8d04438ea2
FIREBASE_DATABASE_URL=https://katarina-portfolio-default-rtdb.europe-west1.firebasedatabase.app
*/
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);


  const getCollectionSnapshot = async (nazivKolekcije) => {
    try{ 
    const collectionRef = ref(db,nazivKolekcije);
    const snapshot = await get (collectionRef);
    if(snapshot.exists()){
        return snapshot;
    }
    return null;
  }catch(err){
    console.error("Something went wrong!",err);
    return null;
  }
 }

 const insert = async (obj,nazivKolekcije) => {
  try{ 
  const collectionRef = ref(db,nazivKolekcije);

  const newCollectionRef = push(collectionRef);
  await set(newCollectionRef,obj);
  }catch(err){
    console.error(err);
  }
 }

 const getCollectionItemById = async (nazivKolekcije,id) => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef,`${nazivKolekcije}/${id}`));
  if(snapshot.exists()){
  return snapshot.val();
  }
  return null;
 }

 const removeCollectionItemById = async (nazivKolekcije,id) => {
    const collectionRef = ref(db,`${nazivKolekcije}/${id}`);
    remove(collectionRef);

     
 }

 const updateCollectionById = async (nazivKolekcije, id, change) => {
  const collectionRef = ref(db,`${nazivKolekcije}/${id}`);
  try{
    update(collectionRef,change);
  }catch(err){
    console.error(err);
  }

 } 

 //blogovi, sve isto kao projects, remove firebase update()

 export {getCollectionSnapshot,insert,getCollectionItemById,removeCollectionItemById,updateCollectionById};

 //firebase za projects-data.json, metode iz firebasa(export, getProjects), blog firebase, .env 
