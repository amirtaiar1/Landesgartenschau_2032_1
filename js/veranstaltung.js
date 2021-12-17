function initFunction() {
    let zeitraumVon = document.querySelector("#zeitraumVon");
    let zeitraumBis = document.querySelector("#zeitraumBis");

    var today = new Date();
    var date = today.getFullYear() + '-' + adjustSubTen(today.getMonth() + 1) + '-' + adjustSubTen(today.getDate());
    var time = adjustSubTen(today.getHours()) + ":" + adjustSubTen(today.getMinutes());
    var dateTime = `${date}T${time}`;

    zeitraumVon.value = dateTime;

    var dateend = today.getFullYear() + '-' + adjustSubTen(today.getMonth() + 1) + '-' + adjustSubTen(today.getDate());
    var timeend = adjustSubTen(adjustHours(today.getHours())) + ":" + adjustSubTen(today.getMinutes());
    var dateTimeEnd = `${dateend}T${timeend}`;

    zeitraumBis.value = dateTimeEnd;
}

function adjustSubTen(v) {
    if (v > 9) {
        return v.toString();
    } else {
        return '0' + v.toString();
    }
}

function adjustHours(v) {
    v = v + 3;
    if (v < 24) {
        return v;
    } else {
        return (v - 24);
    }
}

function checkVonBis() {
    let zeitraumVon = document.querySelector("#zeitraumVon");
    let zeitraumBis = document.querySelector("#zeitraumBis");

    if (zeitraumVon.value > zeitraumBis.value) {
        if (confirm('Sollen die Zeiten automatisch getauscht werden?')) {
            switchTimes();
        }
    } else {

    }
}

function switchTimes() {
    let zeitraumVon = document.querySelector("#zeitraumVon");
    let zeitraumBis = document.querySelector("#zeitraumBis");

    var dateTime1 = zeitraumVon.value;
    var dateTime2 = zeitraumBis.value;

    zeitraumVon.value = dateTime2;
    zeitraumBis.value = dateTime1;
}

function selectPaymentMethod() {
    let paymentRechnung = document.querySelector("#zahlungRechnung");
    let paymentVisa = document.querySelector("#zahlungVisa");
    let paymentMaster = document.querySelector("#zahlungMastercard");

    let fsRechnung = document.querySelector("#fsRechnung");
    let fsCard = document.querySelector("#fsKarte");

    let cardRechnung = document.querySelector("#cardRechnung");
    let cardKarte = document.querySelector("#cardKarte");

    if (paymentRechnung.checked == true) {
        cardRechnung.hidden = false;
        cardKarte.hidden = true;
        fsRechnung.disabled = false;
        fsCard.disabled = true;
    } else {
        cardRechnung.hidden = true;
        cardKarte.hidden = false;
        fsRechnung.disabled = true;
        fsCard.disabled = false;
    }
}

function isDateCorrect() {
    let inputMonat = document.querySelector("#karteMonat");
    let inputJahr = document.querySelector("#karteJahr");
    if (inputMonat.value != '' && inputJahr.value != '') {
        var today = new Date();
        if (today.getFullYear > inputJahr.value || (today.getFullYear == inputJahr.value && today.getMonth > inputMonat.value)) {
            if (confirm('Datum der Karte abgelaufen!')) {

            }
            inputMonat.value = '';
            inputJahr.value = '';
            inputMonat.focus();
        }
    }
}