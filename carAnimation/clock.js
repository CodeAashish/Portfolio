setInterval(() => {
    d = new Date;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hr = 30*h + m/2;
    mr = 6*m;
    sr = 6*s;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;

}, 1000)


// Calculations
// hour
// 12hour=360'
// 1h = 30'
// 60m = 30'
// m = 1/2
// m min = m/2
// h hr = 30*h' + m/2

// minute
// 60m = 360'
// 1m = 6'
// m min = 6*m'

// second
// 60s = 360'
// 1s = 6'
// s sec = 6*s'