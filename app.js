const API_Key = '79d1ca96933b0328e1c7e3e7a26cb347';
  // const city = prompt("2548B5 20H 3>@>4")

function render(template, node) {
    if (!node) return;
    node.innerHTML = template;
};

const btn = document.querySelector("app__button");
btn.addEventListener("click", event => {
  let city = document.querySelector("#app__input").value;
  let base_url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_Key}`
  
  fetch(base_url)
  .then((response) => response.json())
  .then((data) => {
    const weather = data['weather'][0]['main'].toLowerCase();
    const temp = Math.floor(data['main']['temp']);  
    let recs;

    if (temp <= 0) {
      recs = "Wear a warm jacket or a sweater"
    } else if (temp > 0 && temp < 10) {
      recs = "Wear a lighter jacket or coat with hoodie"
    } else if (temp > 10 && temp < 20) {
      recs = "Wear a hoodie and/or a coat"
    } else if (temp > 20 && temp < 25) {
      recs = "Wear a T-shirt and pants or shorts"
    } else if (temp > 25 && temp < 30) {
      recs = "Surely wear shorts and a tee"
    } else if (temp > 30) {
      recs = "Better stay home"
    };
    
    const heading = document.getElementById("heading");
    const result = `
        <div class="app__result" id='result'>
          <div class="weather">
            <p><b>${weather}</b></p>
            <p><b>${temp}</b>�C</p>
          </div>
          <p class="app__result-recs">${recs}</p>
        </div>
        `
      render(result, document.querySelector('#app__weather-container'))
      heading.innerHTML = `Weather in ${city}`;        
    })
})