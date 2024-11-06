//Fazer a máquina reconhecer o nome do amigo <OK>
//Incluir esse nome na lista <OK>
// conseguir fazer o sorteio de um nome

let listaPessoas = [];


function adicionar() {
    let Nome = document.getElementById('nome-amigo').value;
    let NomeMaiusculo = Nome.toUpperCase();
    if(Nome == '') {alert('Insira um nome para adicionar')} else{
        if(listaPessoas.includes(NomeMaiusculo)) {alert('Esse nome já está incluso na lista')
            document.getElementById('nome-amigo').value = ''
        } else{
    if(document.getElementById('lista-amigos').innerText == "") { document.getElementById('lista-amigos').innerHTML = Nome}
    else { document.getElementById('lista-amigos').innerHTML += `, ${Nome}` }
   
    listaPessoas.push(NomeMaiusculo);
console.log(listaPessoas)
    document.getElementById('nome-amigo').value = '';
    
}}}


function reiniciar() {
    document.getElementById('lista-amigos').innerHTML= '';
    document.getElementById('nome-amigo').value = '';
    listaPessoas = []
    document.getElementById("lista-sorteio").innerHTML = ''
    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}



function sortear() {
if(listaPessoas.length < 3) {alert('O número mínimo de elementos para o sorteio é 3');
    return;
}


    embaralha(listaPessoas);
console.log(listaPessoas)    

for(let i = 0; i < listaPessoas.length; i++) {
    ListaSorteio = document.getElementById('lista-sorteio');
    if(i == listaPessoas.length - 1){ListaSorteio.innerHTML += `<p>${listaPessoas[i]}->${listaPessoas[0]}<p>`}
    else {ListaSorteio.innerHTML += `<p>${listaPessoas[i]}->${listaPessoas[i + 1]}<p>`}
}
}



