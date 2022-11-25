function checkNames(name) {
  if (!name) return false;

  switch (name) {
    case "luizcarlos":
      return true;
    case "mateuspereira":
      return true;
    case "eduardomoreira":
      return true;
    default:
      return false;
  }
}

if (!checkNames(window.location.hash.slice(1))) {
  document.location.href = "/index.html";
}

import { createElAndAtt } from "../../components/utils/htmlHelper.js";

const githubIcon = "../../assets/images/logos/github-alternative.svg";
const linkedinIcon = "../../assets/images/logos/linkedin-alternative.svg";
const emailIcon = "../../assets/images/logos/email-icon.svg";

const bio = {
  mateuspereira: {
    name: "Mateus Pereira",
    img: "../../assets/images/images/mateus.jpg",
    quote: "O impossível é só questão de opinião",
    from: "Charlie Brown Jr",
    links: [
      {
        icon: linkedinIcon,
        link: "https://www.linkedin.com/in/matheus-pereira-5a58ab240/",
      },
      { icon: githubIcon, link: "https://github.com/xMatheuz" },
    ],
  },
  eduardomoreira: {
    name: "Eduardo Moreira",
    img: "../../assets/images/images/eduardo.png",
    quote: "O pessimismo da inteligência não deve abalar o otimismo da vontade",
    from: "Romain Rolland",
    links: [
      { icon: linkedinIcon, link: "https://www.linkedin.com/in/moreira-edu/" },
      { icon: githubIcon, link: "https://github.com/Moreira-Edu" },
      { icon: emailIcon, link: "mailto:eduardo.moreira10@fatec.sp.gov.br" },
    ],
  },
  luizcarlos: {
    name: "Luiz Carlos",
    img: "../../assets/images/images/luiz.jpg",
    quote:
      "God gave us eyes at the front of our heads so we can look forwards to the future",
    from: "Kamina",
    links: [
      {
        icon: githubIcon,
        link: "https://github.com/LuizCTJ",
      },
      { icon: emailIcon, link: "mailto:luizctj@outlook.com" },
    ],
  },
  default: {
    img: "",
    quote: "",
    from: "",
  },
};

const { img, quote, from, name, links } = bio[window.location.hash.slice(1)];
const imgContainer = document.getElementById("imgPerfil");
const nameContainer = document.getElementById("nameContainer");
const quoteContainer = document.getElementById("quotePerfil");
const quoteFromContainer = document.getElementById("quoteFrom");
const linksContainer = document.getElementById("card-links");
const backgroundContainer = document.getElementById("card-background");

backgroundContainer.style.backgroundImage = `url('../../assets/images/images/landscapes/landscape (${Math.floor(
  Math.random() * 9
)}).jpg')`;
imgContainer.src = img;
nameContainer.innerHTML = name;
quoteContainer.innerText = `"${quote}"`;
quoteFromContainer.innerText = `-${from}`;

links.forEach(({ icon, link }) => {
  linksContainer.appendChild(
    createElAndAtt("a", {
      attributes: { href: link, target: "_blank" },
      childElements: [createElAndAtt("img", { attributes: { src: icon } })],
    })
  );
});
