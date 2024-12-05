

// setInterval(() => {
//      const allClockInfo = new Date();
// const seconds = allClockInfo.getSeconds();
// const minnut = allClockInfo.getMinutes();
// const soat = allClockInfo.getHours();


// console.log(`${soat.to}`);



// }, 1000);
function updateClock() {
    const now = new Date();

    // Soat, minut, va sekundlarni olish va formatlash
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // HTML elementlarga vaqtni qo‘yish
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Har soniyada soatni yangilash
setInterval(updateClock, 1000);

// Sahifa ochilganida soatni yangilash
updateClock();






























