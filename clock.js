const clock = document.getElementById("clock");

function handleClock(){
    const now = new Date();
    const hour = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");
    clock.innerHTML = `${hour} : ${min} : ${sec}`;
}

handleClock();
setInterval(handleClock, 1000);
