generateDate();

setInterval(generateDate,1000);

function generateDate(){
  let dt = new Date(Date.now());
  let h = dt.getHours();
  let m = dt.getMinutes().toString().padStart(2,"0");
  let s = dt.getSeconds().toString().padStart(2,"0");
  let d = dt.getDay();
  let hour12 = (h % 12 || 12).toString().padStart(2,"0");

  let greeting = "";
  let cls;
  let ampm = document.querySelector('#ampm');

  if (h >= 0 && h < 12) {
    greeting = "morning";
    ampm.innerHTML = "AM";
    cls = 'fa-moon';
  } else if (h >= 12 && h < 17) {
    greeting = "afternoon";
    ampm.innerHTML = "PM";
    cls = 'fa-moon';
  } else if (h >= 17 && h < 21) {
    greeting = "evening";
    ampm.innerHTML = "PM";
    cls = 'fa-sun';
  } else if (h >= 21 && h <= 23) {
    greeting = "night";
    ampm.innerHTML = "PM";
    cls = 'fa-sun';
  }

  document.querySelector("h5 span").innerHTML = "Good " + greeting + ", ";
  document.querySelector("#hr_slot").innerHTML = hour12;
  document.querySelector("#min_slot").innerHTML = m;
  document.querySelector("#sec_slot").innerHTML = s;
  document.querySelector('#day_symbol').classList.remove(cls);

  let days = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
  document.querySelector('#day_slot').textContent = days[d];
}