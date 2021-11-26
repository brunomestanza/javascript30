function playSound(event){
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!audio) return; //Stop the function if the key pressed is not valid
  audio.currentTime = 0; //Resets the sound
  audio.play();
  key.classList.add('playing'); //Add the CSS effect to play the sound
}

function removeTransition(event){
  //Skip if it's not the transform, because there will be some CSS effects,
  //and we want to wait the must longer of them, the transform effect, to remove the HTML class after the event
  if(event.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
