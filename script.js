import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDq1Wpa4EIXMmFM6APlgUdacLPExvrMAYw",
  authDomain: "casa-de-aposta-1-passo.firebaseapp.com",
  projectId: "casa-de-aposta-1-passo",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("cadastroForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cpf = document.getElementById("cpf").value;
  const dataNascimento = document.getElementById("dataNascimento").value;
  const senha = document.getElementById("senha").value;
  const nome = document.getElementById("nome").value;

  try {
    await addDoc(collection(db, "usuarios"), {
      email,
      telefone,
      cpf,
      dataNascimento,
      senha,
      nome
    });

    alert("✅ Cadastro realizado com sucesso!");
    localStorage.setItem("logado", true);
    localStorage.setItem("emailUsuario", email);
    localStorage.setItem("nomeUsuario", nome);

    window.location.href = "home.html";
  } catch (error) {
    console.error("Erro ao salvar:", error);
    alert("❌ Erro ao salvar os dados.");
  }
});