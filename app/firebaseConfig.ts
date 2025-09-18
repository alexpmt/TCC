// Importa as funções do Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Configurações copiadas do site do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDO2Z5mS3hJp7AtQBSuYmQfwCAUiJGqlFU",
  authDomain: "medtime-de7a5.firebaseapp.com",
  projectId: "medtime-de7a5",
  storageBucket: "medtime-de7a5.firebasestorage.app",
  messagingSenderId: "1098064380506",
  appId: "1:1098064380506:web:4d17f070fa9753992c8e63"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a autenticação para usar nas telas
export const auth = getAuth(app);
export default app;
