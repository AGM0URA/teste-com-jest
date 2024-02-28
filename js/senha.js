function comparaSenhas(senha01, senha02) {

  if (senha01 === senha02) {
    return "As senhas são iguais, Sucesso!";
  } else {
    return "Erro: As senhas são diferentes.";
  }
};
module.exports = comparaSenhas;
  