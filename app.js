let input = document.querySelector('.locationInput')
let button = document.querySelector('.searchButton')
let city  = document.querySelector('.location')
let temp = document.querySelector('.temperature')
let feelslike = document.querySelector('.feels-like')
const Apikey = 'b742d95a1f8a10d0be9f1a07e7521f2e'
function getweatherbylocation (location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${Apikey}`)
    .then(res=>res.json())
    .then(result=>{
        console.log(result)
        city.textContent = 'City : ' + result.name 
        temp.textContent = 'temperature :    ' + Math.round(result.main.temp - 273.15) + ' C°'
        feelslike.textContent = 'feels-like :  ' + Math.round(result.main.feels_like - 273.15) + ' C°'
    })
}
button.addEventListener('click', function(e) {
    let loccity = input.value
    getweatherbylocation(loccity)
})