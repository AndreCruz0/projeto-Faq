let descricoes = document.querySelectorAll(".descricao")
let botoes = document.querySelectorAll(".btn")
botoes.forEach((botao, index) => {
    botao.addEventListener("click", () => {
        const estaAtivo = descricoes[index].classList.contains("ativo");
        const imagemAtiva = botoes[index].classList.contains("seta-aberta");
        document.querySelectorAll(".ativo").forEach((classe) => {
            classe.classList.remove("ativo");
            
        });
        document.querySelectorAll(".btn").forEach((classe) => {
            classe.classList.remove("seta-aberta");
        }); 

        if (!estaAtivo) {
            descricoes[index].classList.add("ativo");
        }

        if(!imagemAtiva){
            botoes[index].classList.add("seta-aberta")
        }

        // document.querySelectorAll(".seta-fechada").forEach((classe2) => {
        //     classe2.classList.remove("seta-fechada");
        // });

        // if (!imagemAtiva) {
        //     imagemAtiva[index].classList.add("seta-aberta");
        // }
    });
});


// let descricoes = document.querySelectorAll(".descricao")
// let botoes = document.querySelectorAll(".btn")

// botoes.forEach((botao, index) => {
//     botao.addEventListener("click", () => {
//         const estaAtivo = descricoes[index].classList.contains("ativo")

//         document.querySelectorAll(".ativo").forEach((classe) => {
//             classe.classList.remove("ativo")
//         })

//         if (!estaAtivo){
//             descricoes[index].classList.add("ativo")
//         }
//     })
// })


























// let descricoes = document.querySelectorAll(".descricao")
// // console.log(descricoes);
// let pegarBotao = document.querySelectorAll(".btn")
// // console.log(pegarBotao);
// let itens = ['item 1 ' , 'item 2' , 'item 3']

// //o mais utilizado e o item e o index
// // Exemplo de foreach
// function funcao(item , index , array){
//     console.log(item); 
// }
// itens.forEach(funcao)

// //exemplo 2
// function funcao2( elemento, index , array){
//     console.log(array); // o segundo parametro agora e o primeiro
    
// }
// itens.forEach(funcao2)

// itens.forEach(function funcao2( elemento, index , array){
//     console.log(array); // o segundo parametro agora e o primeiro
    
// })

// //foreach sempre espera uma funçao com 3 parametros
// itens.forEach( ( elemento, index , array)=> {
//     console.log(array); // o segundo parametro agora e o primeiro
    
// })




// // isso aqui e a mesma coisa que aqui



// //  function bahh(item , index , array ) {
// //         log(item)
// //  }
















// let descricoes = document.querySelectorAll('.descricao')
// let buttons = document.querySelectorAll('button')
// buttons.forEach(function (button, index)
// {
//     button.addEventListener("click", function exibirDescricao() {

//         if (descricoes[index].classList.contains("fazAparecer")) {
//             descricoes[index].classList.remove("fazAparecer")
//             descricoes[index].classList.add("fazsumir")
//         } else {
//             descricoes[index].classList.remove("fazsumir")
//             descricoes[index].classList.add("fazAparecer")
//         }
//     })
// });