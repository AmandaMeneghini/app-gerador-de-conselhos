const adviceButton = document.querySelector(".advice-button");
const adviceText = document.querySelector(".advice-text");
const titleAndAdviceId = document.querySelector(".advice-id");

adviceButton.addEventListener("click", drawAdvice);

async function seekRandomAdvice(){ 
    const url = 'https://api.adviceslip.com/advice';
    const answer = await fetch(url);
    return await answer.json();
};

async function implementIdInHTML(){
    const randomAdvice = await seekRandomAdvice();
    const idRandomAdvice = await randomAdvice.slip.id;
    titleAndAdviceId.innerHTML = `advice #${idRandomAdvice}`
}

async function implementAdviceTextInHTML(){ 
    const randomAdvice = await seekRandomAdvice();
    const textRandomAdvice = await randomAdvice.slip.advice;
    adviceText.innerHTML = `"${textRandomAdvice}"`
}

async function drawAdvice() {
    implementIdInHTML();
    implementAdviceTextInHTML();
};
