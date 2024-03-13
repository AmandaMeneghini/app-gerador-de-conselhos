const adviceButton = document.querySelector(".advice-button");
const adviceText = document.querySelector(".advice-text");
const titleAndAdviceId = document.querySelector(".advice-id");

adviceButton.addEventListener("click", drawAdvice);

async function seekRandomAdvice(){ 
    const url = 'https://api.adviceslip.com/advice';
    const answer = await fetch(url);
    return await answer.json();
};

async function implementIdInHTML(idRandomAdvice){
    titleAndAdviceId.innerHTML = `advice #${idRandomAdvice}`
}

async function implementAdviceTextInHTML(textRandomAdvice){ 
    adviceText.innerHTML = `"${textRandomAdvice}"`
}

async function drawAdvice() {
    const randomAdvice = await seekRandomAdvice();
    implementIdInHTML(randomAdvice.slip.id);
    implementAdviceTextInHTML(randomAdvice.slip.advice);
};
