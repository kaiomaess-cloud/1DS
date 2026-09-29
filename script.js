
  <script>

        // Seleciona todos os botões da página
        const botoes = document.querySelectorAll("button");

        // Adiciona uma função para cada botão
        botoes.forEach(function (botao) {

            botao.addEventListener("click", function () {

                // Encontra o número dentro do botão
                let texto = botao.querySelector("span");

                // Aumenta o número de curtidas
                texto.textContent =
                    Number(texto.textContent) + 1;

            });

        });

    </script>
