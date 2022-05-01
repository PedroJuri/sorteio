//Adicionar um item
function logSubmit() {
    nameInput = document.getElementById('name').value;
    if(nameInput == ''){
        alert('Preencha um nome');
        return false;
    }
    var arrayNames   = [];
    arrayNames       = JSON.parse(localStorage.getItem('@items')) || [];
    arrayNames.push({'nome': nameInput});
    localStorage.setItem('@items', JSON.stringify(arrayNames));
}

//Listar items
var lista = JSON.parse(localStorage.getItem('@items'));
if(lista != null){
    lista.forEach(element => {
        var tr  = document.createElement("tr"); 
        var td  = document.createElement("td");
        td.innerHTML = element['nome'] + `<button id="apagar" onclick="apagar('${element['nome']}')">X</button>`;
        tr.appendChild(td);
        document.getElementById('tabela').appendChild(tr);        
    });

    //Limpar toda lista
    function limpar(){
        localStorage.clear('@items');
        location.reload();
    }
}

//Apagar um item especifico
function apagar(params){
    var arrayNome = [];
    var newObj    = [];
    lista.forEach(element => {
        arrayNome.push(element['nome']);
    });
    arrayNome.splice(arrayNome.indexOf(params), 1);    
    for (let index = 0; index < arrayNome.length; index++) {
        newObj.push({'nome': arrayNome[index]});        
    }    
    localStorage.setItem('@items', JSON.stringify(newObj));
    location.reload();
}

//Sortear um item da lista
function sortear(){
    var numeroMax = 0;
    var arrayNome = [];
    lista.forEach(element => {
        numeroMax++;
        arrayNome.push(element['nome'])
    });
    var numero = Math.floor(Math.random() * numeroMax);
    document.getElementById('nomeSorteado').innerText = 'O nome sorteado foi: ' + arrayNome[numero];
}

const form = document.getElementById('form');
form.addEventListener('submit', logSubmit);