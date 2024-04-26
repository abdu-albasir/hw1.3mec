function validateInput() {
    const input = document.getElementById('input').value.trim();
    const linkValidation = document.getElementById('linkValidation');
    const emailValidation = document.getElementById('emailValidation');

    const linkRegex = /^(https?:\/\/)?[\w.-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (linkRegex.test(input)) {
        linkValidation.textContent = 'Ссылка: Да';
        linkValidation.className = 'valid';
    } else {
        linkValidation.textContent = 'Ссылка: Нет';
        linkValidation.className = 'invalid';
    }

    if (emailRegex.test(input)) {
        emailValidation.textContent = 'Email: Да';
        emailValidation.className = 'valid';
    } else {
        emailValidation.textContent = 'Email: Нет';
        emailValidation.className = 'invalid';
    }
}