// TODO: this file! :)
<<<<<<< HEAD
=======
const numberInput = document.getElementById('number');
const addButton = document.querySelector('button');
const numberBankOutput = document.querySelector('#numberBank output');
const sortOddButton = document.getElementById('sortOne');
const sortAllButton = document.getElementById('sortAll');
const oddOutput = document.querySelector('#odds output');
const evenOutput = document.querySelector('#evens output');

let numberBank = [];

function updateNumberBank() {
    numberBankOutput.textContent = numberBank.join(', ');
}

addButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const number = parseInt(numberInput.value);

    if (!isNaN(number)) {
        numberBank.push(number);
        updateNumberBank();
    } else {
        alert('Please enter a valid number');
    }

    numberInput.value = '';
});

function addToOdd(number) {
    oddOutput.textContent += number + ' ';
}

function addToEven(number) {
    evenOutput.textContent += number + ' ';
}

sortOddButton.addEventListener('click', function() {
    if (numberBank.length > 0) {
        const firstNumber = numberBank.shift();

        if (firstNumber % 2 === 0) {
            addToEven(firstNumber);
        } else {
            addToOdd(firstNumber);
        }

        updateNumberBank();
    }
});

sortAllButton.addEventListener('click', function() {
    numberBank.forEach(function(number) {
        if (number % 2 === 0) {
            addToEven(number);
        } else {
            addToOdd(number);
        }
    });

    numberBank = [];
    updateNumberBank();
});

>>>>>>> 9846d78 (Initial commit for Block 20 assignment)
