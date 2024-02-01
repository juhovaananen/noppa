const diceDiv = document.getElementById('dice');

diceDiv.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    
    const imagePath = 'img/dice' + randomNumber + '.png';
    
    const diceImage = document.querySelector('#dice img');
    
    diceImage.src = imagePath;
});