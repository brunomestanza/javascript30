const panels = document.querySelectorAll('.panel');

function toogleOpen(){
  this.classList.toggle('open');
}

function toogleActive(event){
  //We use it because we have the flex-grow and font-size changes in the CSS when the class is added, so, our toogleActive function will be active 2 times
  if(event.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toogleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toogleActive));
