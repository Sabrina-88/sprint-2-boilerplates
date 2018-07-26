var dropMenu = document.getElementById("drop-menu");
dropMenu.addEventListener("change", carregaProgramadoras); // pegar as mudancas do menu

window.onload = carregaMenu();// window onload serve para depois de carregar toda a pagina, carregar esse.

function carregaMenu (){
	var nome = document.createElement("option");
	nome.innerHTML = "selecione sede";
	nome.value = "none";
	dropMenu.appendChild(nome); // da linha 5 ao 8 serve para criar a opcao "selecione sede" la no menu
	for (sede in data){
	var itemMenu = document.createElement("option");
	itemMenu.value = sede;
	itemMenu.innerHTML = sede;
	dropMenu.appendChild(itemMenu);
		}
		};

function carregaProgramadoras(){
var sede = dropMenu.value;
var listaProgramadoras = document.getElementById("exibe-programadoras");
listaProgramadoras.innerHTML ="";
for(turma in data[sede]){// quando usa IN nao precisa usar var turma ou var i, pois da estrutura dele, ja sabe que é um var turma ou var i
	for (i in data[sede][turma] ["students"]){// studants esta entre "" pq é uma string, e é a chave do objeto// sede é o valor do menu, é melhor manter os msmos nomes dos objetos para as variaveis pra nao confundir
var img = document.createElement("img");
img.src = data[sede][turma]["students"] [i] ["photo"];
		listaProgramadoras.appendChild(img);
		}
	}
};
