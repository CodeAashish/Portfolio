// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);

setInterval(() => {
    d = new Date;
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    hr = 30*h + m/2;
    mr = 6*m;
    sr = 6*s;

    hour.style.transform = `rotate(${hr}deg)`
    minute.style.transform = `rotate(${mr}deg)`
    second.style.transform = `rotate(${sr}deg)`
}, 1000)

// calculations:
// hour
// 12hours = 360' rotation
// 1hr = 360/12=30'
// 60m = 30' = 1hr
// 1m = 1/2'
// m min = m/2'
// h hr = 30h' + m/2

// minutes
// 60m = 360'
// 1m = 6'
// m minutes = 6m'

// seconds
// 60s = 360'
// 1s = 6'
// s seconds = 6s'
