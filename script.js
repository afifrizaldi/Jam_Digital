const numberHours = document.querySelector('.number-hours');
const barSeconds = document.querySelector('.bar-seconds');

const numberElement = [];
const barElement = [];

// membuat nomor jam
for (let i = 1; i <= 12; i++) {
    numberElement.push(
        `<span style="--index:${i};"><p>${i}</p></span>`
    );
}

numberHours.insertAdjacentHTML("afterbegin", numberElement.join(""));

// membuat bar detik
for (let i = 1; i <= 60; i++) {
    barElement.push(
        `<span style="--index:${i};"><p></p></span>`
    );
}

barSeconds.insertAdjacentHTML("afterbegin", barElement.join(""));

const handHours = document.querySelector('.hand.hours')
const handMinutes = document.querySelector('.hand.minutes')
const handSeconds = document.querySelector('.hand.seconds')

function getCurrentTime() {
    let date = new Date();
    let currentHours = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();

    /*--------------------------------------------------------
    60 detik = 360 derajat jadi 1 detik = 360/60 = 6 derajat
    60 menit = 360 derajat jadi 1 menit = 360/60 = 6 derajat
    12 jam = 360 derajat jadi 1 jam = 360/12 = 30 derajat

    1 jam = 30 derajat artinya 60 menit = 30 derajat jadi 1 menit = 30/60 = 0,5 atau 1/2 derajat
    
    jadi rumus jamnya adalah (jam * 30 + menit / 2)
    --------------------------------------------------------*/

    handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes / 2}deg)`;
    handMinutes.style.transform = `rotate(${currentMinutes * 6}deg)`;
    handSeconds.style.transform = `rotate(${currentSeconds * 6}deg)`;
}

// panggil fungsi getCurrentTime saat memuat halaman
getCurrentTime();

// panggil getCurrentTime untuk menyetel jarum jam setiap detik
setInterval(getCurrentTime, 1000); //1000ms = 1s