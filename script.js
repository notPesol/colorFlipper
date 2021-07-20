const display = document.querySelector('#display');
const btn = document.querySelector('#flipper');
const body = document.body;

btn.addEventListener('click', ()=>{
    const hexCode = randomColor();
    display.textContent = hexCode;
    body.style.backgroundColor = hexCode;
});

function randomColor(){
    const letters = '0123456789ABCDEF';
    let hexCode = '#';
    for (let i = 0; i < 6; i++){
        hexCode += letters[Math.floor(Math.random() * 16)];
    }
    return hexCode;
}