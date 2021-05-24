function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key =document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //it will stop the function from running
    audio.currentTime = 0; //run back
    audio.play();
    key.classList.add('playing');
  };
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform' ) return; //if it's not a transform, skip it.
    this.classList.remove('playing');
  }
  
  const keys = document.querySelectorAll('.key');
  keys.forEach(key => key.addEventListener('transitioned', removeTransition));
  window.addEventListener('keydown', playSound);