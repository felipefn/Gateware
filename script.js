    // 2.Determine um array de números e encontre o maior número inteiro.
    var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 99, 8, 9, 37]
    console.log(Math.max(...arrayNumeros))


 // 3.Passe a lista de arquivos texto em um diretório específico, 
    // e nestes arquivos deve possuir em seu conteúdo números de telefone 
    // em um formato específico que você deve determinar.


    // Crie uma página com um botão, que ao clicar neste botão, 
    // popule uma caixa de seleção através de uma requisição Ajax a um arquivo JSON.


document.getElementById("btn").addEventListener("click", function(){
    console.log("teste")
    var ajax = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
ajax.open("GET", "https://pokeapi.co/api/v2/pokemon/charizard", true);

// Envia a requisição
ajax.send();

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
  
  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
	if (ajax.readyState == 4 && ajax.status == 200) {
    
		var data = ajax.responseText;
		
        var select = document.getElementById("selectNumber");
        console.log(data)
    var options = JSON.stringify(data);
    console.log(options)
    for(var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
}
    // Retorno do Ajax
		console.log(data);
	}

    
}
});