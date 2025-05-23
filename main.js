// Variables
const frontCard = document.querySelector('.front-card');
const backCard = document.querySelector('.back-card');
frontCard.addEventListener('click', () => {
    frontCard.classList.add('move');
    // Add a listener to the back card to remove the class from frontCard when clicked
    backCard.addEventListener('click', () => {
        frontCard.classList.remove('move');
    });
});