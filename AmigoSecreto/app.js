let amigos=[]
let lista_amigos=document.querySelector("#listaAmigos")
let input_amigos=document.querySelector("#amigo")
let submit=document.querySelector(".button-add")
let sortear_amigo=document.querySelector(".button-draw")
//let resultado=document.getElementsByTagName("resultado")
let resultado=document.querySelector("#resultado")



function agregar_amigo(){
    if (!input_amigos.value){
        alert("Tienes que poner un nombre para continuar");
    }
    amigos.push(input_amigos.value);
    input_amigos.value="";
    mostrar_amigos()
    resultado.innerHTML="";
}

function clear(variable){
    lista_amigos.innerHTML=" ";
}

function mostrar_amigos(){
     let item2=document.createElement("LI")
    amigos.forEach(numero=>{
        item2.innerHTML=numero;
        lista_amigos.appendChild(item2);
    })
}

function elegir_amigo(){
    let item=document.createElement("LI")
    amigo=Math.floor((Math.random()*amigos.length));
    item.innerHTML=amigos[amigo];
    resultado.appendChild(item);
    amigos.length=0;
}

function sortearAmigo(){
    lista_amigos.innerHTML="";
    elegir_amigo();
}

//INCLUIR FUNCIONES

submit.setAttribute("onclick","agregar_amigo()");
