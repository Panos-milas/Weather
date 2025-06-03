var button = document.querySelector('.button')
var inputValue = document.querySelector('.inputValue')
var cityName = document.querySelector('.cityName');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');
var weatherIcon = document.querySelector('.weatherIcon');



button.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=384808cef61082dd8777ffa108200ca9&units=metric')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            var humidityValue = data['main']['humidity'];
            var windValue = data['wind']['speed'];

            cityName.innerHTML = nameValue;
            temp.innerHTML = tempValue;
            desc.innerHTML = descValue;


            cityName.textContent = "Πόλη: " + nameValue;
            temp.textContent = "Θερμοκρασία: " + tempValue + "°C";
            desc.textContent = "Περιγραφή: " + descValue;
            humidity.textContent = "Υγρασία: " + humidityValue + "%";
            wind.textContent = "Ταχύτητα ανέμου: " + windValue + " m/s";

            if (tempValue < 10) {
                weatherIcon.src = "images/cold.png"; // Εικόνα για κρύο καιρό
            } else if (tempValue >= 10 && tempValue <= 25) {
                weatherIcon.src = "images/mild.png"; // Εικόνα για μέτριο καιρό
            } else {
                weatherIcon.src = "images/hot.png"; // Εικόνα για ζεστό καιρό
            }

        })



        .catch(err => alert("Wrong city name!"))
})
