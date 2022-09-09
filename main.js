import { prova } from "./src/data/index.js";

const fragment = document.createDocumentFragment();
const body = document.querySelector("body");

const liQuestoes = document.createElement("ol");

const renderOpcao = (opcoes) =>
  opcoes
    .map(
      ({ opcao, id }, i) =>
        `<p style='cursor: pointer; background-color: aqua' data-id='${id}'>${opcao}</p>`
    )
    .join("");

const itemQuestoes = prova
  .map(({ texto, enunciado, questoes, fonte }) => {
    return `
   <li>
   <p>${texto}</p>
   <small>${fonte}</small>
   <p>${enunciado}</p>
   ${renderOpcao(questoes)}
   </li>
  `;
  })
  .join("");
liQuestoes.innerHTML = itemQuestoes;

fragment.append(liQuestoes);
body.append(fragment);

const respostas = document.querySelectorAll("[data-id]");
respostas.forEach((resposta) => {
  resposta.addEventListener("click", () => {
    const index = Number(resposta.getAttribute("data-id"));
    const [teste] = prova
      .map(({ questoes }) => {
        return questoes.find(({ id }) => id === index);
      })
      .filter((arr) => arr != undefined);

    alert(teste.correto);
  });
});
