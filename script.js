const numeroWhats = "258858504106"; 
const catalogo = document.getElementById("catalogo");

const itens = [
  {nome:"IPHONE 12",
  preco:"18 000.00MZN", 
  estado:"USADO-EM BOM ESTADO", 
  img:"img/iphone12.jpg", 
  descricao:"128GB, FACE ID OFF, BATERIA 80%, SEM RACHA, FORA DA CAIXA", 
  categoria:"Eletrônicos"},
  
  
  {nome:"IPHONE X", 
    preco:"7 000MZN", 
    estado:"USADO-EM BOM ESTADO", 
    img:"img/iphonex.jpg",
     descricao:"256GB, BOA BATERIA, FACE ID OFF, AS VEZES DESLIGA AO EFECTUAR UMA CHAMADA :)", 
     categoria:"Eletrônicos"},


  {nome:"CURRICULUM VITAE",
     preco:"200/300MZN",
      estado:"NORMAL/URGENTE",
       img:"img/Cv.jpg", 
       descricao:"Cvs feitos com diversos modelos e prontos a serem entregues dentro do prazo.",
        categoria:"Livros"},
  
  
      {nome:"DESIGN GRAFICO",
         preco:"",
         estado:"DISPONIVEL",
         img:"img/design.jpg",
          descricao:"CRIACAO DE IMAGENS, VIDEOS, LOGOS, MARCAS EM VARIOS MODOS, PARA MAIS INFORMAÇAO SOBRE, confira!", 
          categoria:"Serviços"},
 
 
      {nome:"TECNICO EM INFORMATICA", 
        preco:"",
         estado:"DISPONIVEL",
         img:"img/ti.jpg",
          descricao:"PRESTACAO DE SERVIÇOS, SOFTWARE, HARDWARE (MONTAGEM, REPARAÇÃO, INSTALACAO DE DRIVERS, APPKS E MUITO MAIS!)",
           categoria:"Serviços"},


      {nome:"TXUNA WIL", 
        preco:"", 
        estado:"DISPONIVEL",
         img:"img/txuna.jpg",
          descricao:"EMPRESTIMO DE DINHEIRO APARTIR DE 500MT, COM 20 DIAS DE REEMBOLSO E COM A DEVOLUCAO 40% DO VALOR TOTAL. MAIS T&C,confira!", 
          categoria:"Serviços"},
 


      {nome:"PLAYSTATION 5™", 
        preco:"40.000MZN", 
        estado:"NOVO", 
        img:"img/play5.jpg", 
        descricao:"1TERRABYTE, 1 CONTROLE, 2 JOGOS.", 
        categoria:"jogos"},
 
 
      {nome:"PLAYSTATION 5 DIGITAL™",
         preco:"35.000MZN", 
         estado:"USADO/EXCELENTE ESTADO",
          img:"img/play5digital.jpg", 
          descricao:"1TERRABYTE, 1 CONTROLE, 2 JOGOS.", 
          categoria:"Eletrônicos"}
];

// Renderiza todos os produtos inicialmente
function renderizar(itensRender){
  catalogo.innerHTML = "";
  itensRender.forEach(item => {
    const card = document.createElement("div");
    card.className = "item";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.nome}" onclick="abrirImagem('${item.img}')">
      <h3>${item.nome}</h3>
      <p>Preço: ${item.preco}</p>
      <button onclick='abrirModal(${JSON.stringify(item)})'>Ver detalhes</button>
    `;
    catalogo.appendChild(card);
  });
}

renderizar(itens);

// Filtrar categoria
function filtrarCategoria(categoria){
  const filtrados = itens.filter(item => item.categoria === categoria);
  renderizar(filtrados);
}

// MODAL DETALHES
function abrirModal(item){
  const m = document.getElementById("modal");
  m.style.display = "block";
  document.getElementById("modal-img").src = item.img;
  document.getElementById("modal-nome").innerText = item.nome;
  document.getElementById("modal-preco").innerText = "Preço: " + item.preco;
  document.getElementById("modal-estado").innerText = "Estado: " + item.estado;
  document.getElementById("modal-descricao").innerText = item.descricao;
  document.getElementById("btn-comprar").onclick = () => comprar(item.nome,item.preco);
}

function fecharModal(){ document.getElementById("modal").style.display="none"; }

// MODAL IMAGEM
function abrirImagem(src){
  document.getElementById("modalImagem").style.display = "block";
  document.getElementById("imgGrande").src = src;
}
function fecharImagem(){ document.getElementById("modalImagem").style.display = "none"; }

// MODAL CONTACTO
function abrircontacto(){ document.getElementById("modalcontacto").style.display="block"; }
function fecharcontacto(){ document.getElementById("modalcontacto").style.display="none"; }

// MODAL VENDA
function abrirvenda(){ document.getElementById("modalvenda").style.display="block"; }
function fecharvenda(){ document.getElementById("modalvenda").style.display="none"; }

// WHATSAPP
function comprar(nome,preco){
  const texto = `Olá! Quero comprar o item: ${nome} – ${preco}`;
  const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(texto)}`;
  window.open(url,"_blank");
}

// Fecha modais clicando fora
window.onclick = function(event){
  const modais = ["modal","modalImagem","modalcontacto","modalvenda"];
  modais.forEach(id=>{
    const m = document.getElementById(id);
    if(event.target === m) m.style.display="none";
  });
};