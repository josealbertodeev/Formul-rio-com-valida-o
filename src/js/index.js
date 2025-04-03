const camposDeEntrada = document.querySelectorAll(".input-texto");
const botaoEnviar = document.querySelector(".botao-enviar")

botaoEnviar.addEventListener('click',(e)=>{
    e.preventDefault()

    camposDeEntrada.forEach((input)=>{
        if(input.value){
            input.classList.add('validado')
            input.classList.remove('invalido')
            input.nextElementSibling.classList.remove('mostrar')

        }else{
            input.classList.remove('validado')
            input.classList.add('invalido')
            input.classList.add('mostrar')
            input.nextElementSibling.classList.add('mostrar')
        }
    })
})
