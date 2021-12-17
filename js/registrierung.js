function absendenDisable(){
    let elm = document.querySelector("#registrieren");
    if(document.querySelector("#agb").checked == true) {
        elm.disabled = false;
    }
    else {
        elm.disabled = true;
    }
}

function comparePwrd() {
    let pwrdField = document.querySelector("#password");
    let pwrdConfirm = document.querySelector("#repeatPassword");
    let labelPwrd = document.querySelector("#passlabel");
    let labelPwrdConfirm = document.querySelector("#passlabelconfirm");

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

