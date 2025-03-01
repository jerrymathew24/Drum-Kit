//document.querySelectorAll('.drum') selects all elements with the class drum.
//.forEach(drum => { ... }) loops through each selected element.

document.querySelectorAll('.drum').forEach(drum => {

//  addEventListener('click', ...) adds an event listener for mouse clicks.
// drum.getAttribute('data-key') fetches the data-key attribute from the clicked drum element.
// playSound(data-key) is called to play the corresponding sound.
// example:  <button class="drum" data-key="A">A</button>
// playSound("A"); 

    drum.addEventListener('click', () => playSound(drum.getAttribute('data-key')));
});



document.addEventListener('keydown', event => {
    playSound(event.key.toUpperCase());
});
// document.getElementById(key) selects an <audio> element with the corresponding id.
// if (audio) { ... } ensures the audio element exists before trying to play.
// audio.currentTime = 0; resets the audio to the start (so it plays immediately if clicked repeatedly).
// audio.play(); plays the sound.

function playSound(key) {
    const audio = document.getElementById(key);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

