

console.log('Hello Client!')


// fetch
// fetch('url').then((response)={

// })
let weatherForm = document.querySelector('form');
let search = document.querySelector('input');
let message1 = document.querySelector('#message1');
let cityState = document.querySelector('#cityState');
let currentWeather = document.querySelector('#currentWeather');
let currentTemp = document.querySelector('#currentTemp');
let message2 = document.querySelector('#message2')
let message3 = document.querySelector('#message3')
let message4 = document.querySelector('#message4')
let currentTime = document.querySelector('#currentTime');
let feelLikes = document.querySelector('#feelLikes');


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('testing');
    let city = search.value;
    message1.textContent= 'Loading...'
    fetch('/weather?city='+city).then((response) => {
    response.json().then((data) =>{
       if (data.error)
       console.log(error);
       else
       {
        message1.textContent ="Current weather Conditions for"  
        cityState.textContent = data.weather.currentCity;
        currentWeather.textContent= data.weather.currentDescription;
        message2.textContent = "Current Temperature:";
        currentTemp.textContent = data.weather.currentTemp;
        message3.textContent = "Feel likes Temperature";
        feelLikes.textContent = data.weather.feelsLikeTemp;
        message4.textContent = "Local Time:";
        currentTime.textContent = data.weather.time;
       }
    })
});
});


