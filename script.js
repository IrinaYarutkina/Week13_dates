function calculateDays() {
    const input = document.getElementById("birthdate");
    const error = document.getElementById("empty");
    const result = document.getElementById("result");
    if (!input.value) {
        error.style.display = "block";
        result.textContent = "";
        return;
    }
    error.style.display = "none";
    const today = new Date();
    let birthday = new Date(input.value);
    birthday.setFullYear(today.getFullYear());

    if (birthday < today) {
        birthday.setFullYear(today.getFullYear() + 1);
    }
    const diffTime = birthday - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    result.textContent = `До твоего дня рождения осталось ${diffDays} ${getDayWord(diffDays)}.`;
}
function getDayWord(number) {
    if (number % 10 === 1 && number % 100 !== 11) {
        return "день";
    } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
        return "дня";
    } else {
        return "дней";
    }
}