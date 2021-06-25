const divs = document.querySelector('div');

function logText(e){
    console.log(this.classList.value);
}


divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once:true;
}))

GamepadButton.addEventListener('click', () =>
console.log('click!'));
},{
    once:true
});