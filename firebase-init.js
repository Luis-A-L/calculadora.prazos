// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8MJSyAdL_GtHgVXScaGe0JxRqKojKE0",
  authDomain: "calculadora-djen-interna.firebaseapp.com",
  projectId: "calculadora-djen-interna",
  storageBucket: "calculadora-djen-interna.firebasestorage.app",
  messagingSenderId: "460535734989",
  appId: "1:460535734989:web:c0b14fa985dc48775f3f84",
  measurementId: "G-Q1GLR377MN"
};

// Inicializa o Firebase e torna as variáveis globais
let app;
try {
    app = firebase.initializeApp(firebaseConfig);
} catch (e) {
    console.error("Erro ao inicializar o Firebase:", e);
}

const auth = app ? firebase.auth() : null;
const db = app ? firebase.firestore() : null;
const storage = app ? firebase.storage() : null;
