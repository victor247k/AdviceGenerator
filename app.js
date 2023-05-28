const diceBtn = document.getElementById('diceBtn');
const adviceText = document.querySelector('.advice-text');
const adviceID = document.querySelector('.advice-ID');

function generateQuote() { 
    axios.get('https://api.adviceslip.com/advice').then(response => {
        adviceID.textContent = `${response.data.slip.id}`
        adviceText.textContent = `${response.data.slip.advice}`
    });
};

diceBtn.addEventListener('click', generateQuote)


