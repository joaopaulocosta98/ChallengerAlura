
var buttonCripto = document.querySelector(".Criptografar");


buttonCripto.addEventListener("click", function() {
	var input = document.querySelector("#Texto")
	var texto = input.value;

	var lista = texto.split("")
	
	var novoTexto = texto.replace(/a/gi,"át").replace(/o/gi,"ôbr")
	.replace(/e/gi,"ẽntr").replace(/i/gi,"imr").replace(/u/gi,"ùft")

	var contador = 0
	var textoResultado = document.querySelector(".input-resultado")
	textoResultado.textContent = novoTexto
	
		
	
})

var buttonDescripto = document.querySelector(".Descriptografar")

buttonDescripto.addEventListener("click",function(){

	var input = document.querySelector("#Texto")
	var texto = input.value;

	var lista = texto.split("")

	var novoTexto = texto.replace(/át/gi,"a").replace(/ôbr/gi,"o")
	.replace(/ẽntr/gi,"e").replace(/imr/gi,"i").replace(/ùft/gi,"u")

	var contador = 0
	var textoResultado = document.querySelector(".input-resultado")
	textoResultado.textContent = novoTexto
	
})

var buttonCopiar=document.querySelector(".copiar")
buttonCopiar.addEventListener("click",function(){

	var resultado = document.querySelector(".input-resultado").select()
	document.execCommand("copy")
})