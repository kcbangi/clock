const hourHand = document.querySelector('.hrs-hand')
const minuteHand = document.querySelector('.mins-hand');
const secondHand = document.querySelector('.secs-hand');

function setDate() {
    const now = new Date();
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
}

setInterval(setDate, 1000);