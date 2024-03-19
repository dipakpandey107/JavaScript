const digital = document.getElementById('clock');

// setInterval(function() {
//     let date = new Date();
//     let hours = date.getHours().toString().padStart(2, '0');
//     let minutes = date.getMinutes().toString().padStart(2, '0');
//     let seconds = date.getSeconds().toString().padStart(2, '0');
//     let timeString = `${hours}:${minutes}:${seconds}`;
//     digital.textContent = timeString;
// }, 1000);


const time = document.getElementById('clock');

setInterval(function() {
    let date = new Date();
    time.innerText = date.toLocaleTimeString();
    console.log(date);
}, 1000);


