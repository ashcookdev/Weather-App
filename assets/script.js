// add event listener 
var searchButton = document.querySelector("#search-button")
var momentDate = moment().format("dddd, MMMM Do YYYY")
var day2 = moment().add(1, 'days').format("dddd");
var day3 = moment().add(2, 'days').format("dddd");
var day4 = moment().add(3, 'days').format("dddd");
var day5 = moment().add(4, 'days').format("dddd");
var day6 = moment().add(5, 'days').format("dddd");

let div2 = document.querySelector("#day2")
let div3 = document.querySelector("#day3")
let div4 = document.querySelector("#day4")
let div5 = document.querySelector("#day5")
let div6 = document.querySelector("#day6")
let weather = document.querySelector("#today")
let nav = document.querySelector("#history")
let topS = document.querySelector("#searches")
let save = document.querySelector("#save")

searchButton.addEventListener("click", function search(event) {
    event.preventDefault()
    let searchInput = document.querySelector("#search-input").value
    console.log(searchInput);
// get value from input 
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&appid=b4a45e6e171ac866361e3a1729860d8b`)
.then(response => response.json())
.then(data => { console.log(data.city.coord)   
let lat = data.city.coord.lat
console.log(lat)
let lon = data.city.coord.lon
console.log(lon)
fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b4a45e6e171ac866361e3a1729860d8b`)
.then(response => response.json())
.then(newData => { console.log(newData)
  let icon = newData.weather[0].icon
    weather.innerHTML =`<div class="card current">
    <p class="card-text">${momentDate} </p>
    <img id="img" src="http://openweathermap.org/img/wn/${icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
    <div class="card-body">
    <h2> ${newData.name} </h2>
    <p class="card-text"> Temperature: ${newData.main.temp}°</p>
    <p class="card-text"> Wind Speed: ${newData.wind.speed}mph</p>
    <p class="card-text"> ${newData.weather[0].description} </p>
    </div>`
    let name = [newData.name]
    citiesName.push(name)
   cityButton()
   if (newData.weather[0].description === "clear sky") {
    console.log("yes")
    document.body.setAttribute("class", "sunny")};

    if (newData.weather[0].description === "overcast clouds"){
    console.log("no")
    document.body.setAttribute("class", "cloudy")};

    if (newData.weather[0].description === "scattered clouds"){
        console.log("no")
        document.body.setAttribute("class", "cloudy")};

        if (newData.weather[0].description === "few clouds"){
            console.log("no")
            document.body.setAttribute("class", "cloudy")};

            if (newData.weather[0].description === "broken clouds"){
                console.log("no")
                document.body.setAttribute("class", "cloudy")};
               
                if (newData.weather[0].description === "shower rain"){
                    console.log("no")
                    document.body.setAttribute("class", "rain")};

                    if (newData.weather[0].description === "thunderstorm"){
                        console.log("no")
                        document.body.setAttribute("class", "rain")};
                        
                        if (newData.weather[0].description === "rain"){
                            console.log("no")

                            document.body.setAttribute("class", "rain")};

    if (newData.weather[0].description === "light snow") {
        console.log("no")
        document.body.setAttribute("class", "snow")};
        if (newData.weather[0].description === "snow") {
            console.log("no")
            document.body.setAttribute("class", "snow")};
            
})   
fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b4a45e6e171ac866361e3a1729860d8b`)
.then (responsive => responsive.json())
.then(dayFive => { console.log(dayFive.list[15])
    div2.innerHTML =`<div class="card forecast">
    <p class="card-text">${day2} </p>
    <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[4].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
    <div class="card-body">
    <h2> </h2>
    <p class="card-text"> Temperature:${dayFive.list[7].main.temp} °</p>
    <p class="card-text"> Wind Speed: ${dayFive.list[7].wind.speed} mph</p>
    <p class="card-text"> ${dayFive.list[7].weather[0].description} </p>
    </div>`
    div3.innerHTML= `<div class="card forecast">
    <p class="card-text">${day3} </p>
    <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[15].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
    <div class="card-body">
    <h2> </h2>
    <p class="card-text"> Temperature:${dayFive.list[15].main.temp} °</p>
    <p class="card-text"> Wind Speed: ${dayFive.list[15].wind.speed} mph</p>
    <p class="card-text"> ${dayFive.list[15].weather[0].description} </p>
    </div>`
    div4.innerHTML= `<div class="card forecast">
    <p class="card-text">${day4} </p>
    <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[20].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
    <div class="card-body">
    <h2> </h2>
    <p class="card-text"> Temperature:${dayFive.list[20].main.temp} °</p>
    <p class="card-text"> Wind Speed: ${dayFive.list[20].wind.speed} mph</p>
    <p class="card-text"> ${dayFive.list[20].weather[0].description} </p>
    </div>`
    div5.innerHTML= `<div class="card forecast">
    <p class="card-text">${day5} </p>
    <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[28].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
    <div class="card-body">
    <h2> </h2>
    <p class="card-text"> Temperature:${dayFive.list[28].main.temp} °</p>
    <p class="card-text"> Wind Speed: ${dayFive.list[28].wind.speed} mph</p>
    <p class="card-text"> ${dayFive.list[28].weather[0].description} </p>
    </div>`


})

})
   

})
var citiesName = [];
console.log(citiesName)



function cityButton() {
    nav.innerHTML= "";
    for (let i = 0; i < citiesName.length; i++) {
        const city = citiesName[i];
        window.localStorage.setItem("city", citiesName)
        let newBtn = document.createElement("button")
        newBtn.className = "btn btn-primary city"
        // let savedData = JSON.parse(localStorage.getItem("city"))
    //    topS.innerHTML= ` <ul> ${savedData} </ul>`
        newBtn.textContent = city
      nav.appendChild(newBtn)
       }
}




nav.addEventListener("click",function name(event) {
   let citi = event.target.textContent;
   fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${citi}&appid=b4a45e6e171ac866361e3a1729860d8b`)
   .then(response => response.json())
   .then(data => { console.log(data.city.coord)   
   let lat = data.city.coord.lat
   console.log(lat)
   let lon = data.city.coord.lon
   console.log(lon)
   fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b4a45e6e171ac866361e3a1729860d8b`)
   .then(response => response.json())
   .then(newData => { console.log(newData)
     let icon = newData.weather[0].icon
       weather.innerHTML =`<div class="card current">
       <p class="card-text">${momentDate} </p>
       <img id="img" src="http://openweathermap.org/img/wn/${icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
       <div class="card-body">
       <h2> ${newData.name} </h2>
       <p class="card-text"> Temperature: ${newData.main.temp}°</p>
       <p class="card-text"> Wind Speed: ${newData.wind.speed}mph</p>
       <p class="card-text"> ${newData.weather[0].description} </p>
       </div>`
       if (newData.weather[0].description === "clear sky") {
        console.log("yes")
        document.body.setAttribute("class", "sunny")};
    
        if (newData.weather[0].description === "overcast clouds"){
        console.log("no")
        document.body.setAttribute("class", "cloudy")};
    
        if (newData.weather[0].description === "scattered clouds"){
            console.log("no")
            document.body.setAttribute("class", "cloudy")};
    
            if (newData.weather[0].description === "few clouds"){
                console.log("no")
                document.body.setAttribute("class", "cloudy")};
    
                if (newData.weather[0].description === "broken clouds"){
                    console.log("no")
                    document.body.setAttribute("class", "cloudy")};
                   
                    if (newData.weather[0].description === "shower rain"){
                        console.log("no")
                        document.body.setAttribute("class", "rain")};
    
                        if (newData.weather[0].description === "thunderstorm"){
                            console.log("no")
                            document.body.setAttribute("class", "rain")};
                            
                            if (newData.weather[0].description === "rain"){
                                console.log("no")
    
                                document.body.setAttribute("class", "rain")};
    
        if (newData.weather[0].description === "light snow") {
            console.log("no")
            document.body.setAttribute("class", "snow")};
            if (newData.weather[0].description === "snow") {
                console.log("no")
                document.body.setAttribute("class", "snow")};
       
   })   
   fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=b4a45e6e171ac866361e3a1729860d8b`)
   .then (responsive => responsive.json())
   .then(dayFive => { console.log(dayFive.list[15])
       div2.innerHTML =`<div class="card forecast">
       <p class="card-text">${day2} </p>
       <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[4].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
       <div class="card-body">
       <h2> </h2>
       <p class="card-text"> Temperature:${dayFive.list[7].main.temp} °</p>
       <p class="card-text"> Wind Speed: ${dayFive.list[7].wind.speed} mph</p>
       <p class="card-text"> ${dayFive.list[7].weather[0].description} </p>
       </div>`
       div3.innerHTML= `<div class="card forecast">
       <p class="card-text">${day3} </p>
       <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[15].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
       <div class="card-body">
       <h2> </h2>
       <p class="card-text"> Temperature:${dayFive.list[15].main.temp} °</p>
       <p class="card-text"> Wind Speed: ${dayFive.list[15].wind.speed} mph</p>
       <p class="card-text"> ${dayFive.list[15].weather[0].description} </p>
       </div>`
       div4.innerHTML= `<div class="card forecast">
       <p class="card-text">${day4} </p>
       <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[20].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
       <div class="card-body">
       <h2> </h2>
       <p class="card-text"> Temperature:${dayFive.list[20].main.temp} °</p>
       <p class="card-text"> Wind Speed: ${dayFive.list[20].wind.speed} mph</p>
       <p class="card-text"> ${dayFive.list[20].weather[0].description} </p>
       </div>`
       div5.innerHTML= `<div class="card forecast">
       <p class="card-text">${day5} </p>
       <img id="img" src="http://openweathermap.org/img/wn/${dayFive.list[28].weather[0].icon}@2x.png" class="card-img-top" alt="..." style="max-width: 100px">
       <div class="card-body">
       <h2> </h2>
       <p class="card-text"> Temperature:${dayFive.list[28].main.temp} °</p>
       <p class="card-text"> Wind Speed: ${dayFive.list[28].wind.speed} mph</p>
       <p class="card-text"> ${dayFive.list[28].weather[0].description} </p>
       </div>`
      
    
       save.addEventListener("click",function save() {
        preventDefault()
cityButton()     
})})})})




    let savedData = window.localStorage.getItem('city')
    let newArray = savedData.split(',')
 console.log(newArray)
 

 for (let i = 0; i < newArray.length; i++) {
    const cIity = newArray[i];
    let newBtnn = document.createElement("button")
newBtnn.className = ("btn btn-primary")
    newBtnn.textContent = cIity
        nav.appendChild(newBtnn)}






  




