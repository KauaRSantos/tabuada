const togglebtn = document.getElementById('toggle-mode');
        const body = document.body;

        togglebtn.addEventListener('click', function () {
            body.classList.toggle('dark-mode')
        })

        function gerarTabuada() {
            var numero = parseInt(document.getElementById('numero').value);
            var tabela = document.getElementById('tabela-tabuada');

            tabela.innerHTML = ""; //limpar a tabela antes de gerar a outra.//

            //gerar tabuada//

            for (var i = 1; i <= 10; i++) {
                var resultado = numero * i;
                var linha = "<tr><td>" + numero + " X " + i + " =" + "</td><td>" + resultado + "</td></tr>";

                tabela.innerHTML += linha
            }
            document.querySelector(".multi").setAttribute("class", "multi2");
        }

        /*
         perseInt:vai tranformar o numeral real e etc em numero inteiro
    
    
    
         */

       