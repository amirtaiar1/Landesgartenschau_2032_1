let myArray=  [
    {'ZeitraumVon' : '13:00', 'ZeitraumBis' : '12:00', 'Veranstaltung' : 'Veranstaltung1'},
    {'ZeitraumVon' : '13:00', 'ZeitraumBis' : '12:00', 'Veranstaltung' : 'Veranstaltung1'},
    {'ZeitraumVon' : '13:00', 'ZeitraumBis' : '12:00', 'Veranstaltung' : 'Veranstaltung1'},
    {'ZeitraumVon' : '13:00', 'ZeitraumBis' : '12:00', 'Veranstaltung' : 'Veranstaltung1'}
]

buildTable(myArray)

function buildTable(data){
    let table = document.getElementById('myTable')

    for (let i = 0; i <data.length; i++){
        let row = <tr>
            <td>$(data[i].ZeitraumVon)</td>
            <td>$(data[i].ZeitraumBis)</td>
            <td>$(data[i].ZeitraumVon)</td>
            <td>$(data[i].ZeitraumVon)</td>
        </tr>
        table.innerHTML += row
    }
}


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
    let zeitraumVon = document.querySelector("#outpotdate");
    let zeitraumBis = document.querySelector("#inputaufenthaltsdatum");

    if (zeitraumVon.value > zeitraumBis.value) {
        if (confirm('Zeiten automatisch tausche?')) {
            switchTimes();
        }
    } else {

    }
}

function switchTimes() {
    let outpotdate = document.querySelector("#outpotdate");
    let inputaufenthaltsdatum = document.querySelector("#inputaufenthaltsdatum");

    var dateTime1 = outpotdate.value;
    var dateTime2 = inputaufenthaltsdatum.value;

    outpotdate.value = dateTime2;
    inputaufenthaltsdatum.value = dateTime1;
}



function selectPaymentMethod() {
    let rechnung = document.querySelector("#rechnung");
    let visa = document.querySelector("#visa");
    let mastercard = document.querySelector("#mastercard");

    let Rechnungbsp = document.querySelector("#Rechnungbsp");
    let Kartenzahlung = document.querySelector("#Kartenzahlung");

    let karteR = document.querySelector("#karteR");
    let KarteVersteckt = document.querySelector("#KarteVersteckt");

    if (rechnung.checked == true) {
        karteR.hidden = false;
        KarteVersteckt.hidden = true;
        Rechnungbsp.disabled = false;
        Kartenzahlung.disabled = true;
    } else {
        karteR.hidden = true;
        KarteVersteckt.hidden = false;
        Rechnungbsp.disabled = true;
        Kartenzahlung.disabled = false;
    }

    function isDateCorrect() {
        let inputMonat = document.querySelector("#MonatderKarte");
        let inputJahr = document.querySelector("#inputJahr");
        if (inputMonat.value != '' && inputJahr.value != '') {
            var today = new Date();
            if (today.getFullYear > inputJahr.value || (today.getFullYear == inputJahr.value && today.getMonth > inputMonat.value)) {
                if (confirm('Karte abgelaufen!')) {

                }
                inputMonat.value = '';
                inputJahr.value = '';
                inputMonat.focus();
            }
        }
    }

}