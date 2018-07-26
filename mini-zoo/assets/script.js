var dropMenu = document.getElementById('drop-menu');
dropMenu.addEventListener('change',cliqueEfeito);

// cliqueEfeito - isto é uma função

var pegaFoto = document.querySelectorAll('.thumbs-item');

console.log(dropMenu);
console.log(pegaFoto);

function cliqueEfeito () {
    pegaFoto.forEach(foto => {
		var efeito = dropMenu.value;
		//console.log(efeito);    
		if (efeito === "sepia"){
			foto.classList = "thumbs-item";// esse não tem add pois a gente quer resetar para a classe original e nao ficar aculmulando classes,
			foto.classList.add("sepia"); // com .add ele soma mais uma classe. para testar tira a linha 16 de cada
		}
		if (efeito === "grayscale"){
			foto.classList = "thumbs-item";
			foto.classList.add("grayscale");
		}
		if (efeito === "invert"){
			foto.classList = "thumbs-item";
			foto.classList.add("invert");
		}
		if (efeito === ""){
			foto.classList = "thumbs-item";
		// esse não tem add pois a gente quer resetar para a classe original e nao ficar aculmulando classes, 
		}
    });
}