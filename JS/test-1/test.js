// ---Note---

// 1
// 1-10
// 10-100
// 100
// 1000

// 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909

// ---Note---

// ---Main---

const getCentury = (year) => {

    if (year.length === 4) {
        let lastDigs = year.slice(2);
        let century = year.slice(0, 2);

        checkLastDigs(lastDigs, century);

    } else if (year.length === 3) {
        let lastDigs = year.slice(1);
        let century = year.slice(0, 1);

        checkLastDigs(lastDigs, century);
    } else if (year.length === 2 || year.length === 1) {
        console.log(1);
    }

}

getCentury('20');

// ---Main---

// ---Helpers---

function zeroCheck(a) {
    if (a == '00' || a == '01' || a == '02' || a == '03' || a == '04' || a == '05' || a == '06' || a == '07' || a == '08' || a == '09') {
        return true;
    } else {
        return false;
    }
}

function checkLastDigs(lastDigs, century) {
    if (zeroCheck(lastDigs) == true) {
        console.log(parseInt(century) + 1);
    } else if (lastDigs >= 10 && lastDigs <= 99) {
        console.log(parseInt(century) + 1);
    } else {
        console.log(century);
    }
}

function isString(arg) {
    
}

// ---Helpers---