let personagem = document.querySelector('.personagem')

let posicao = {
    cima: 0,
    esquerda: 0
}

document.addEventListener("keydown",(event) =>{
    console.log(event.key)

    if (event.key == "ArrowUp"){
        posicao.cima -= 100
    }
    else if(event.key == "ArrowDown"){
        posicao.cima += 100
    }
    else if(event.key == "Arrowleft"){
        posicao.esquerda -= 100
    }
    else if(event.key == "ArrowRight"){
        posicao.esquerda += 100
    }
    console.log("cima:" + posicao.cima +"\n esquerda:" + posicao.esquerda)

personagem.style.top = posicao.cima + "pix";
personagem.style.top = posicao.esquerda + "pix";
})
5