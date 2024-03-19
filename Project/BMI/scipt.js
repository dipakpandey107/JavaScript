const form = document.querySelector('#bmiForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);

    if (isNaN(height) || isNaN(weight)) {
        alert("Please enter a valid number for height and weight!");
    } else if (height <= 0 || weight <= 0) {
        alert("Height and Weight must be greater than zero!");
    } else {
        calculateBMI(height, weight);
    }
});

function calculateBMI(height, weight) {
    let bmi = Math.round((weight / (Math.pow(height / 100, 2))) * 10) / 10;
    showResult(bmi);
}

function showResult(bmi) {
    let category;

    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal weight';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    const resultDiv = document.querySelector("#result");
    resultDiv.innerHTML = `Your BMI is ${bmi}. You are ${category}.`;
}
