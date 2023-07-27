const elemento = document.querySelector("#text-nome");
const texto_nome = "José Messias.";
const intervalo = 200;

function showText(elemento, texto_nome, intervalo) {
  const char = texto_nome.split("").reverse();

  const type = setInterval(() => {
    if (!char.length) {
      return clearInterval(type);
    }

    const next = char.pop();

    elemento.innerHTML += next;
  }, intervalo);
}

showText(elemento, texto_nome, intervalo);



