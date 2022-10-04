document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', event => {
        let key = event.target.textContent;
        playSound(key);
        animateButton(key);
    })
})

document.addEventListener('keydown', event => {
    let key = event.key;
    playSound(key);
    animateButton(key);
})


function playSound(key) {
    switch (key) {
        case 'w':
            let tom1 = new Audio('../audio/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('../audio/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('../audio/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('../audio/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('../audio/snare.mp3');
            snare.play();
            break;

        case 'k':
            let crash = new Audio('../audio/crash.mp3');
            crash.play();
            break;

        case 'l':
            let kick = new Audio('../audio/kick-bass.mp3');
            kick.play();
    }
}

function animateButton(key) {
    let activeButton = document.querySelector('.' + key);

    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100)
}
