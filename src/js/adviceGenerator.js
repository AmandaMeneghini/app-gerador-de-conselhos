const adviceButton = document.querySelector(".advice-button");
const adviceText = document.querySelector(".advice-text");
const titleAndAdviceId = document.querySelector(".advice-id");

adviceButton.addEventListener("click", () => {
    // e.preventDefault();
    drawAdvice();
});

//função que procura e devolve um conselho aleatório
async function seekRandomAdvice(){ 
    const url = 'https://api.adviceslip.com/advice';
    const answer = await fetch(url);
    return await answer.json();
}; //verificado ✅

//pega o id do conselho
async function implementIdInHTML(){
    const randomAdvice = await seekRandomAdvice();
    const idRandomAdvice = await randomAdvice.slip.id;
    titleAndAdviceId.innerHTML = `advice #${idRandomAdvice}`
}

//pega o texto do conselho
async function implementAdviceTextInHTML(){ 
    const randomAdvice = await seekRandomAdvice();
    const textRandomAdvice = await randomAdvice.slip.advice;
    // console.log(textRandomAdvice);
}

async function drawAdvice() {
    implementIdInHTML();
    implementAdviceTextInHTML();
};

//TEMPORÁRIO 
drawAdvice();


//FUNÇÃO que retorna apenas a MENSAGEM do conselho
// async function getAdviceText(query){ 
//     const url = `https://api.adviceslip.com/advice/search/${query}`;
//     const answer = await fetch(url);
//     return await answer.json();
// };