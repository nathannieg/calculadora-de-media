/* * ---------- Código da aula 

const nome = 'Nathannie'
const notaPrimeiroBimestre = 9.4355
const notaSegundoBimestre = 7.234
const notaTerceiroBimestre = 4.234
const notaQuartoBimestre = 2.183

const notaFinal =
  (notaPrimeiroBimestre +
    notaSegundoBimestre +
    notaTerceiroBimestre +
    notaQuartoBimestre) /
  4

const notaFixada = notaFinal.toFixed(1)

console.log(`Nota da(o) aluna(o) ${nome}: ${notaFixada}`) */

////////////////////////////////

/* ---------- Código aprimorado */

function calcularMedia() {
  // Receber as notas e guardar em variáveis
  const bimestreUm = parseFloat(document.getElementById('b1').value)
  const bimestreDois = parseFloat(document.getElementById('b2').value)
  const bimestreTres = parseFloat(document.getElementById('b3').value)
  const bimestreQuatro = parseFloat(document.getElementById('b4').value)

  // calcular a media
  const mediaAnual = (
    (bimestreUm + bimestreDois + bimestreTres + bimestreQuatro) /
    4
  ).toFixed(1)
  /* console.log(mediaAnual) */

  // mostrar a média na tela
  const notaDoAluno = (document.getElementById('nota').innerHTML = mediaAnual)

  // exibir o status - aprovado ou reprovado
  // se a notaDoAluno for maior 7, eu vou mostrar no status a mensagem "Aprovado!"
  if (notaDoAluno >= 7) {
    const statusDoAluno = (document.getElementById('status').innerHTML =
      'Aprovado!')
  } else {
    const statusDoAluno = (document.getElementById('status').innerHTML =
      'Reprovado!')
  }
}
