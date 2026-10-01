


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
function pesquisarProduto(){

  const texto = document
    .getElementById("barraPesquisa")
    .value
    .toLowerCase();

  const resultados = itens.filter(item =>
    item.nome.toLowerCase().includes(texto)
  );

  renderizar(resultados);
  }


  function mostrarCategorias() {
  const categorias = document.getElementById("categorias");

  if (categorias.style.display === "none") {
    categorias.style.display = "block";
  } else {
    categorias.style.display = "none";
  }
}