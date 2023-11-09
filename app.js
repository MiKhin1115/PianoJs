let keyPiano ={
    '1': 'audio/1.mp3',
    '2': 'audio/2.mp3',
    '3': 'audio/3.mp3',
    '4': 'audio/4.mp3',
    '5': 'audio/5.mp3',
    '6': 'audio/6.mp3',
    '7': 'audio/7.mp3',
    '8': 'audio/1.mp3',
    '9': 'audio/2.mp3',
    '0': 'audio/3.mp3',
    'a': 'audio/4.mp3',
    'b': 'audio/5.mp3',
    'c': 'audio/6.mp3',
    'd': 'audio/7.mp3',
    'e': 'audio/1.mp3',
    'f': 'audio/2.mp3',
    'g': 'audio/3.mp3',
}
document.addEventListener('keydown', (event) => playPiano(event.key));

function playPiano(key){
    audio = new Audio(keyPiano[key]);
    audio.play();
    let keyClick = document.querySelector(`[data-key="${key}"]`);
    keyClick.classList.add('active');
    const removeActive = setInterval(() => {
        keyClick.classList.remove('active')
    },500);
}
let keys = document.querySelector('.key');
keys.forEach(key => {
    key.addEventListener('click' , (event) =>{
        let keyClick = key.dataset.key;
        playPiano(keyClick);
    } )
});