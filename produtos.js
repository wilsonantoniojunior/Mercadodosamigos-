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


