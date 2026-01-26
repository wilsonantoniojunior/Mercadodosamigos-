// Lista de itens (você pode adicionar mais)
const itens = [
  {
    nome: "Camiseta Azul",
    preco: "500 MZN",
    img: "img/Camiseta.jpg"
  
  },
  {
    nome: "Chapéu de Sol",
    preco: "350 MZN",
    img: "img/Chapeu.jpg",
    detalhes: "",
  },
  {
  nome: "play 5",
  preco: "35000 MZN",
  img: "img/play5.jpg",
  descricao: "500gb, 2 controles, novinho:)",
  }

];

const numeroWhats = "258845016462"; // Coloque seu número com DDI + Código do país

const catalogo = document.getElementById("catalogo");

// Cria os cartões de item
itens.forEach((item) => {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.nome}">
    <h3>${item.nome}</h3>
    <p>Preço: ${item.preco}</p>
    <button onclick='abrirModal(${JSON.stringify(item)})'>
  Ver detalhes
    </button>
  `;
  catalogo.appendChild(card);
});

// Função de compra
function comprar(nome, preco) {
  const texto = `Olá! Quero comprar o item: ${nome} – ${preco}`;
  const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;
  window.open(url, "_blank");
}
function abrirContato() {
  document.getElementById("modalContato").style.display = "block";
}

function fecharModal() {
  document.getElementById("modalContato").style.display = "none";
}

function abrirContato () {
  document.getElementById("modalContato").style.display = "block";
}

function fecharModal () {
  document.getElementById("modalContato").style.display = "none";
}

function abrirModal(item) {
  document.getElementById("modal").style.display = "block";

  document.getElementById("modal-img").src = item.img;
  document.getElementById("modal-nome").innerText = item.nome;
  document.getElementById("modal-preco").innerText = "Preço: " + item.preco;
  document.getElementById("modal-descricao").innerText = item.descricao;

  document.getElementById("btn-comprar").onclick = function () {
    comprar(item.nome, item.preco);
  };
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
