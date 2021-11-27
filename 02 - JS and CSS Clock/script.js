const secondHand =  document.querySelector('.second-hand');
const minuteHand =  document.querySelector('.minute-hand');
const hourHand =  document.querySelector('.hour-hand');
const allHands = document.querySelectorAll('.hand');

function setDate(){
  const seconds = new Date().getSeconds();
  toogleAnimation(seconds);
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = new Date().getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hours = new Date().getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function toogleAnimation(seconds){ //Is used because the animation when the seconds clock reach 60 seconds is weird
  if (seconds == 0) {
    allHands.forEach(hand => {
      hand.style.transition = 'none';
    });
  }
  if (seconds == 1){
    allHands.forEach(hand => {
      hand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    });
  }
}

setInterval(setDate, 1000);
