    // 2.Determine um array de números e encontre o maior número inteiro.
    var arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 99, 8, 9, 37]
    console.log(Math.max(...arrayNumeros))


    // 3.Passe a lista de arquivos texto em um diretório específico, 
    // e nestes arquivos deve possuir em seu conteúdo números de telefone 
    // em um formato específico que você deve determinar.


    // Crie uma página com um botão, que ao clicar neste botão, 
    // popule uma caixa de seleção através de uma requisição Ajax a um arquivo JSON.

    const button = document.getElementById("search-btn")

    function populateArray (elements) {
        const select = document.getElementById("select-pokemon");
        for (var i = 0; i < elements.length; i++) {
          const  { name } = elements[i].ability
          const option = document.createElement("option");
          option.textContent = name;
          option.value = name;
          select.appendChild(option);
        }
      }
      function getData    ()    {
        var xmlhttp = new XMLHttpRequest();
        var url = "https://pokeapi.co/api/v2/pokemon/ditto";
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
      
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              try {
                  const response = JSON.parse(xmlhttp.responseText);
                  populateArray(response.abilities)
              } catch (error) {
                  throw Error;
              }
            }
        }
      }
      
      button.addEventListener('click', () => {
        getData()
      })