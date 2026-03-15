let sentences = []
let index = 0
let synth = window.speechSynthesis
let currentSentence = ""

function splitSentences(text) {
    return text.match(/[^.!?,]+[.!?,]+|[^.!?,]+$/g) || []
}

function speak(text) {
    let utter = new SpeechSynthesisUtterance(text)
    utter.rate = 0.9
    synth.speak(utter)
}

function start() {
    let text = document.getElementById("text").value
    sentences = splitSentences(text)
    index = 0
    next()
}

function next() {
    if (index >= sentences.length) return

    currentSentence = sentences[index].trim()
    document.getElementById("current").innerText = currentSentence

    speak(currentSentence)
    index++
}

function repeat() {
    speak(currentSentence)
}