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
  const ampm = document.querySelector('#ampm');

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

  bg_animation(greeting);

  document.querySelector("#day_symbol").classList.remove(cls);
  document.querySelector("h5 span").innerHTML = "Good " + greeting + ", ";
  document.querySelector("#hr_slot").innerHTML = hour12;
  document.querySelector("#min_slot").innerHTML = m;
  document.querySelector("#sec_slot").innerHTML = s;

  const days = ['sunday','monday','tuesday','wednesday','thrusday','friday','saturday'];
  document.querySelector('#day_slot').textContent = days[d];
}

function bg_animation(greeting){
  const main_body = document.getElementsByTagName('main')[0];

  if((greeting == 'morning' || greeting == 'afternoon') && !main_body.classList.contains('morningFadeIn')){
    if(main_body.classList.contains('eveningFadeIn')){
      main_body.classList.remove('eveningFadeIn');
      main_body.classList.add('eveningFadeOut');
      setTimeout(() => {
        main_body.classList.remove('eveningFadeOut');
        main_body.classList.add('morningFadeIn');
        }, 1000);
    }else{
      main_body.classList.add('morningFadeIn');
    }

  }else if((greeting == 'evening' || greeting == 'night') && !main_body.classList.contains('eveningFadeIn')){
    if(main_body.classList.contains('morningFadeIn')){
      main_body.classList.remove('morningFadeIn');
      main_body.classList.add('morningFadeOut');
      setTimeout(() => {
        main_body.classList.remove('morningFadeOut');
        main_body.classList.add('eveningFadeIn');
        }, 1000);
    }else{
      main_body.classList.add('eveningFadeIn');
    }
  }
}