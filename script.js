// Lista de itens (você pode adicionar mais)
const itens = [
  
  {
    nome: "IPHONE 12",
    preco: "18 000.00MZN",
    estado:"USADO-EM BOM ESTADO",
    img: "img/iphone12.jpg",
    descricao: "128GB, FACE ID OFF, BATERIA 80%, SEM RACHA, FORA DA CAIXA",
    
  },
  {
  nome: "IPHONE X",
  preco: "7 000MZN",
  estado:"USADO-EM BOM ESTADO",
  img: "img/iphonex.jpg", 
  descricao: "256GB, BOA BATERIA, FACE ID OFF, AS VEZES DESLIGA AO EFECTUAR UMA CHAMADA :)",
  },
  


];

const numeroWhats = "258858504106"; // Coloque seu número com DDI + Código do país

const catalogo = document.getElementById("catalogo");

// Cria os cartões de item
itens.forEach((item) => {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
    <img src="${item.img}" alt="${item.nome}">
    <h3>${item.nome}</h3>
    <p class="estado">${item.estado}</p>
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
function abrircontacto() {
  document.getElementById("modalcontacto").style.display = "block";
}
function fecharcontacto() {
  document.getElementById("modalcontacto").style.display = "none";
}


function abrirvenda() {
  document.getElementById("modalvenda").style.display = "block";
}

function fecharvenda() {
  document.getElementById("modalvenda").style.display = "none";
}





function abrirModal(item) {
  document.getElementById("modal").style.display = "block";

  document.getElementById("modal-img").src = item.img;
  document.getElementById("modal-nome").innerText = item.nome;
  document.getElementById("modal-preco").innerText = "Preço: " + item.preco;
  document.getElementById("modal-estado").innerText = "Estado: " + item.estado;
  document.getElementById("modal-descricao").innerText = item.descricao;

  document.getElementById("btn-comprar").onclick = function () {
    comprar(item.nome, item.preco);
  };
}
function fecharModal() {
  document.getElementById("modal").style.display = "none";
}
window.onclick = function(event) {
  const contacto = document.getElementById("modalcontacto");
  const venda = document.getElementById("modalvenda");

  if (event.target === contacto) contacto.style.display = "none";
  if (event.target === venda) venda.style.display = "none";
};