function limpiar(){
    for(let i of box){
        i.classList.remove('error')
    }
    document.querySelector("#error").classList.add('hidden')
}


function cambioNormal(event){
    const caja = event.currentTarget.parentElement;
    caja.classList.remove("error");
}

function SubmitQ(event){
    const chequeo = [
        elementos[0].value.length === 0,
        elementos[1].value.length === 0,
        elementos[2].checked === false
    ]

    let C = false;
    for(let i = 0; i<chequeo.length; i++){
        if (chequeo[i]){
            box[i].classList.add("error");
            elementos[i].addEventListener('change',cambioNormal)
            C = true;
        }
    }
    if(C){
        const mensaje = document.querySelector("#error");
        mensaje.classList.remove("hidden");
        event.preventDefault();
    }
}

const elementos =[
    document.forms["form1"]["title"],
    document.forms["form1"]["description"],
    document.forms["form1"]["accept"],
];

const box = [
    document.querySelector("#titulo"),
    document.querySelector("#descripcion"),
    document.querySelector("#licencia"),
]

const buttonL = document.querySelector("#Limpiar")
buttonL.addEventListener('click',limpiar)

const buttonS = document.querySelector("#Submit")
buttonS.addEventListener('click',SubmitQ)

