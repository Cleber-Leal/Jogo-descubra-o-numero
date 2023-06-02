const elementoChute = document.getElementById('chute')
window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    const chute = e.results[0][0].transcript;
    exibeChute(chute)
    VerificarSeOk(chute)
}

function exibeChute(fala) {
    elementoChute.innerHTML = `
    <div>Você disse: </div>
    <span class="box">${fala}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())

