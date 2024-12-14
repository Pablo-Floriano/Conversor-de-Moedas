const pedra = document.querySelector(".pedra")
let win = document.querySelector(".winner")

pedra.addEventListener("click", SortRock)

let result = ""


function SortRock(){

    const Random = Math.random()
    
    if(Random < 0.33){
        result = "rock"
    }else if(Random < 0.66){
        result = "paper"
    }else{
        result = "scissor"
    }

    if(result === "rock"){
        win.innerHTML = "Empate"
        win.style.color = "gray"
    }
    else if(result === "paper"){
        win.innerHTML = "Derrota"
        win.style.color = "red"
    }
    else{
        win.innerHTML = "Vitória"
        win.style.color = "gold"
    }
    console.log(result)
}
   
function sortPaper(){

    const Random = Math.random()
    
    if(Random < 0.33){
        result = "rock"
    }else if(Random < 0.66){
        result = "paper"
    }else{
        result = "scissor"
    }

    if(result === "paper"){
        win.innerHTML = "Empate"
        win.style.color = "gray"
    }
    else if(result === "scissor"){
        win.innerHTML = "Derrota"
        win.style.color = "red"
    }
    else{
        win.innerHTML = "Vitória"
        win.style.color = "gold"
    }
    console.log(result)
}

function sortScissors(){

    const Random = Math.random()
    
    if(Random < 0.33){
        result = "rock"
    }else if(Random < 0.66){
        result = "paper"
    }else{
        result = "scissor"
    }

    if(result === "scissor"){
        win.innerHTML = "Empate"
        win.style.color = "gray"
    }
    else if(result === "rock"){
        win.innerHTML = "Derrota"
        win.style.color = "red"
    }
    else{
        win.innerHTML = "Vitória"
        win.style.color = "gold"
    }
    console.log(result)
}


