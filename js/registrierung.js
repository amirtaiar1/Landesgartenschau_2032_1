function agbSubmitChange() {
    let agbCheckBox = document.querySelector("#agb");
    let regButton = document.querySelector("#submitRegistrieren");
    if (agbCheckBox.checked == true) {
        regButton.disabled = false;
    } else {
        regButton.disabled = true;
    }
}

function comparePwrd() {
    let pwrdField = document.querySelector("#inPassword");
    let pwrdConfirm = document.querySelector("#repeatPassword");
    let labelPwrd = document.querySelector("#labelPwrd");
    let labelPwrdConfirm = document.querySelector("#labelPwrdConfirm");

    if (pwrdField.value != '' && pwrdConfirm.value != '') {
        if (pwrdField.value != pwrdConfirm.value) {
            if (confirm('Check Password again!')) {
                pwrdConfirm.value = '';
                pwrdField.value = '';
                pwrdField.focus();
                labelPwrd.innerHTML = 'Passwort* <i class="bi bi-x-lg">';
                labelPwrdConfirm.innerHTML = 'Passwort wiederholen* <i class="bi bi-x-lg">';
            }
        } else {
            labelPwrd.innerHTML = 'Passwort* <i class = "bi bi-check-lg">';
            labelPwrdConfirm.innerHTML = 'Passwort wiederholen* <i class = "bi bi-check-lg">';
        }
    }
}