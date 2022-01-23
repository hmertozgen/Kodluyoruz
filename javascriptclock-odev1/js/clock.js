let fullName = prompt("Adınız nedir?");

let myName = document.querySelector("#myName");

myName.innerHTML = `${fullName}`;

function showTime() {
  let date = new Date();
  let h = date.getHours(); // Saat bilgisini verir
  let m = date.getMinutes(); // Dakika bilgisin verir
  let s = date.getSeconds(); // Saniye bilgisini verir
  let day = date.getDay(); // gün bilgisini verir

  if (day == 1) {
    day = "Monday";
  } else if (day == 2) {
    day = "Tuesday";
  } else if (day == 3) {
    day = "Wednesday";
  } else if (day == 4) {
    day = "Thursday";
  } else if (day == 5) {
    day = "Friday";
  } else if (day == 6) {
    day = "Saturday";
  } else if (day == 0) {
    day = "Sunday";
  }

  s = s < 10 ? "0" + s : s;

  let time = `${h}:${m}:${s} ${day}`;
  // document.getElementById("myClock").innerHTML = time;

  let myClock = document.querySelector("#myClock");
  myClock.innerHTML = `${time}`;
  console.log(date.getDay());

  setTimeout(showTime, 1000);

  // setTimeout(fonksiyonAdi, msSure); fonksiyonAdi parametresine çalışmasını istediğimiz fonksiyonu, msSure parametresine ise fonksiyonun ne kadar süre sonra çalışacağı milisaniye olarak belirtiyoruz(1000 ms = 1 saniye).
}
showTime();
