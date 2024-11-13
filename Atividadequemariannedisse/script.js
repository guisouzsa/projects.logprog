function contar(){
  let resultado = ""; 
    for (let n = 100; n<201; n++ ){
    if(n%2 !=0){
      resultado += n + " ";
    }
  }
    document.getElementById('resultado').innerText = `O resultado é: ${resultado}`;
  }
