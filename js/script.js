
function logSubmit() {
    nameInput        = document.getElementById('name').value;
    var arrayNames   = [];
    arrayNames       = JSON.parse(localStorage.getItem('@items')) || [];
    arrayNames.push({'nome': nameInput});
    localStorage.setItem('@items', JSON.stringify(arrayNames));
}

var lista = JSON.parse(localStorage.getItem('@items'));
if(lista != null){
    lista.forEach(element => {
        var tr = document.createElement("tr"); 
        var td = document.createElement("td"); 
        var t = document.createTextNode(element['nome']);
        tr.appendChild(td);
        td.appendChild(t); 
        document.getElementById('tabela').appendChild(tr);        
    });

    function limpar(){
        localStorage.clear('@items');
        location.reload();
    }
}

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