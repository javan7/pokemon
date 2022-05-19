const inp = document.querySelector(".input");
const img2 = document.querySelector(".img2");
const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");
const par = document.querySelector(".par");
let data = "";

const getPok = async (poke) => {
  let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
  res = await res.json();
  return res;
};

const inpOn = inp.addEventListener("keyup", (event) => {
  data = event.target.value;
});

const btnOn = async () => {
  const res = await getPok(data.toLowerCase());
  //   elem.preventDefault();
  const image = document.createElement("img");
  image.className = "img2";
  image.src = res.sprites.front_default;
  image.alt = res.name;
  document.querySelector(".par").appendChild(image);
};
btn.addEventListener("click", btnOn);

btn2.addEventListener("click", () => {
  par.lastChild.remove();
});
