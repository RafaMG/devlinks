/* Essa função faz o controle do modo escuro/claro do site.
 *
 * 1. Na linha 5 estamos atribuindo o documento HTML que nossa página Web.
 *
 * 2. Na linha 8 verifica-se dentro da tag html contém a classe com o valor light.
 * Caso essa condição seja verdadeira, o programa remove o valor light, se o valor
 * for negativo será adicionado o valor que finaliza na linha 14.
 *
 * 3. Existe uma função mais simples para fazer todo esse código que é a toggle().
 * -> html.classList.toggle("light");
 *
 * 4. Acabei alteração o código para deixá-lo mais legível, mas poderia ter apenas
 * instaciado a variável img e colocado a instrução de modificar a imagem dentro do if/else.
 **/

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = html.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
  }
}

