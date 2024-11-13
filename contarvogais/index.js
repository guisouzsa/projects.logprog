function Meubotao() {
  let palavra = document.getElementById("nome").value; 
  let soma = 0; 
  for (i = 0; i < palavra.length; i++){
    if (palavra[i].toUpperCase() == "A" || palavra[i].toUpperCase() == "E" || palavra[i].toUpperCase() == "I" || palavra[i].toUpperCase() == "O" || palavra[i].toUpperCase() == "U" )
    {
      soma++;
    }
  }
  console.log(soma);
  document.getElementById('soma').innerText = `o resultado é: ${soma}`;
}



