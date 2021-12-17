function adjustSubTen(v) {
    if (v > 9) {
        return v.toString();
    } else {
        return '0' + v.toString();
    }
}

function fixDate() {
    let dateUnfor = document.querySelector("#datum_unformatted");
    let dateFor = document.querySelector("#date");

    var d = new Date(dateUnfor.value);

    var year = d.getFullYear();
    var month = adjustSubTen(d.getMonth() + 1);
    var day = adjustSubTen(d.getDate());

    var newdate = (day + "." + month + "." + year);

    dateFor.value = newdate;
}