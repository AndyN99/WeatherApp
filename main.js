const cityInput = document.querySelector("#cityInput")
const citySumbit = document.querySelector("#citySumbit")
const modal = document.querySelector("#modal")
const cityName = document.querySelector("#cityName")
const temperature = document.querySelector("#temperature")
const precip = document.querySelector("#precip")
const humidity = document.querySelector("#humidity")
const windSpeed = document.querySelector("#windSpeed")
const windDirection = document.querySelector("#windDirection")
const conditionText = document.querySelector("#conditionText")
const conditionImg = document.querySelector("#conditionImg")
const exitModal = document.querySelector("#exitModal")
citySumbit.addEventListener("click", () => {
  
  let api = fetch(`https://api.weatherapi.com/v1/current.json?key=2bd297eb054b4dafa99162738220906&q&q=${cityInput.value}&aqi=no`)
    api
    .then(response => response.json())
    .then(data => {
      console.log(data.location.name)
      cityName.textContent = data.location.name + ", " + data.location.country
      temperature.textContent = data.current.temp_f + " ℉"
      precip.textContent = data.current.precip_in + " in"
      humidity.textContent = data.current.humidity + " %"
      windSpeed.textContent = data.current.wind_mph + " mph"
      windDirection.textContent = data.current.wind_dir
      conditionText.textContent = data.current.condition.text
      conditionImg.src = data.current.condition.icon
      modal.style.display = "grid"
      modal.showModal();

    }) 
})
exitModal.addEventListener("click", () => {
  modal.style.display = "none"
  modal.close();
})
