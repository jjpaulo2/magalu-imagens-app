function currentYear() {
    let today = new Date();
    let currentYear = today.getFullYear();

    let yearElement = document.getElementById('current-year');
    yearElement.innerHTML = currentYear;
}

currentYear()