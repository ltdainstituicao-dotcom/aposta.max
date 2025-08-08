// home.js
document.addEventListener("DOMContentLoaded", () => {
  const logado = localStorage.getItem("logado");
  const nome = localStorage.getItem("nomeUsuario");
  const email = localStorage.getItem("emailUsuario");

  if (!logado) {
    window.location.href = "login.html";
    return;
  }

  const saudacao = nome
    ? `Olá, ${nome}`
    : `Olá, ${email || "usuário"}`;

  document.getElementById("saudacaoUsuario").textContent = saudacao;

  document.getElementById("logoutBtn").addEventListener("click", () => {
    localStorage.clear();
    window.location.href = "login.html";
  });
});
