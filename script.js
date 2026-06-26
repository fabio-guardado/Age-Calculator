const form = document.getElementById('age-form');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Captura dos elementos e valores//

    const dayInput = document.getElementById('day');
    const monthInput = document.getElementById('month');
    const yearInput = document.getElementById('year');

    const dayVal = dayInput.value.trim();
    const monthVal = monthInput.value.trim();
    const yearVal = yearInput.value.trim();

    let isValid = true;

    //Limpar erros e resultados//

    resetErrors([dayInput, monthInput, yearInput]);
    resetResults();

    //validações//

    if (!dayVal) { setError(dayInput, 'This field is required'); isValid = false; }
    if (!monthVal) { setError(monthInput, 'This field is required'); isValid = false; }
    if (!yearVal) { setError(yearInput, 'This field is required'); isValid = false; }

    if (!isValid) return; //se houver campos vazios, para aqui antes de validar//

    const d = parseInt(dayVal, 10);
    const m = parseInt(monthVal, 10);
    const y = parseInt(yearVal, 10);

    //validar limites numéricos individuais//

    if (d < 1 || d > 31) { setError(dayInput, 'Must be a valid day'); isValid = false; }
    if (m < 1 || m > 12) { setError(monthInput, 'Must be a valid monht'); isValid = false; }

    // validar se a data é no futuro//

    const today = new Date();
    const currentYear = today.getFullYear();

    if (y > currentYear) {
        setError(yearInput, 'Must be in the past');
        isValid = false;
    }

    if (!isValid) return;

    // Validar consistência//

    const inputDate = new Date(y, m -1, d);
    if (inputDate > today) {
        setError(yearInput, 'Must be in the past');
        isValid = false; 
    } else if (inputDate.getMonth() !== m - 1) {
        setError(dayInput, 'Must be a valid date');
    }

    if (!isValid) return;

    // Cálculo da idade//

    calculateAge(d, m, y, today);
}); 

// Funções auxiliares de validação//

function setError(inputElement, message) {
    const group = inputElement.parentElement;
    const errorSpan = group.querySelector('.error-message');
    group.classList.add('error');
    errorSpan.textContent = message;
}

function resetErrors(inputs) {
    inputs.forEach(input => {
        const group = input.parentElement;
        group.classList.remove('error');
        const errorSpan = group.querySelector('.error-message');
        if (errorSpan) errorSpan.textContent = '';       
    });
}

//Limpar os números antigos//

function resetResults() {
    document.getElementById('result-years').textContent = '--';
    document.getElementById('result-months').textContent = '--';
    document.getElementById('result-days').textContent = '--';
} 

//Função de cálculo e animação// 

function calculateAge(birthDay, birthMonth, birthYear, today) {
    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDay = today.getDate();

    let calculatedYears = currentYear - birthYear;
    let calculatedMonths = currentMonth - birthMonth;
    let calculatedDays = currentDay - birthDay;

    // Ajuste se os dias forem negativos//

    if (calculatedDays < 0){
        const previousMonthDate = new Date(currentYear, currentMonth - 1, 0);
        calculatedDays += previousMonthDate.getDate();
        calculatedMonths--;
    }

    //Ajuste se os meses forem negativos//

    if (calculatedMonths < 0) {
        calculatedMonths += 12;
        calculatedYears--;
    }

    //Iniciar as animações fluidas//

    animateNumber('result-years', calculatedYears);
    animateNumber('result-months', calculatedMonths);
    animateNumber('result-days', calculatedDays);
}

function animateNumber(elementId, targetValue) {
    const element = document.getElementById(elementId);
    let startValue = 0;
    const duration = 600;

    if (targetValue === 0) {
        element.textContent = 0;
        return;
    }

    const stepTime = Math.max(Math.floor(duration / targetValue), 15);

    const timer = setInterval(() => {
        startValue++;
        element.textContent = startValue;

        if (startValue >= targetValue) {
            clearInterval(timer);
            element.textContent = targetValue;
        }
    }, stepTime);
}