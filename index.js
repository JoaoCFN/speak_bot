const utterance = new SpeechSynthesisUtterance();
utterance.text = "Seu texto aqui";
utterance.lang = "pt-br";

function speak(){
    speechSynthesis.speak(utterance);
}

function stopSpeak(){
    speechSynthesis.cancel();
}

function setText(event){
    utterance.text = event.target.innerText;
}

function changeSpeed(event){
    utterance.rate = event.target.value;
}
