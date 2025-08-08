import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDq1Wpa4EIXMmFM6APlgUdacLPExvrMAYw",
  authDomain: "casa-de-aposta-1-passo.firebaseapp.com",
  projectId: "casa-de-aposta-1-passo",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const senha = document.getElementById("loginSenha").value;

  const usuariosRef = collection(db, "usuarios");
  const snapshot = await getDocs(usuariosRef);

  let logado = false;

  snapshot.forEach((doc) => {
    const dados = doc.data();
    if (dados.email === email && dados.senha === senha) {
      logado = true;
      localStorage.setItem("logado", true);
      localStorage.setItem("emailUsuario", dados.email);
      localStorage.setItem("nomeUsuario", dados.nome || "");
    }
  });

  if (logado) {
    alert("✅ Login realizado com sucesso!");
    window.location.href = "home.html";
  } else {
    document.getElementById("loginErro").innerText = "E-mail ou senha incorretos!";
  }
});