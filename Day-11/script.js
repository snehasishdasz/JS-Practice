const input = document.getElementById('city-input');
const button = document.getElementById("button");
const cityregion = document.getElementById("city-region");
const time = document.getElementById("time");
const temp = document.getElementById("temp");

async function getdata(cityname){
const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=42c2304c3f6c4be596f184220241010&q=${cityname}&aqi=yes`)
return await promise.json()
}

getdata()
button.addEventListener('click',async ()=>{
    const value = input.value;
    const result = await getdata(value);
    cityregion.innerText = `${result.location.name}, ${result.location.region}, ${result.location.country}`;
    time.innerText = result.location.localtime;
    temp.innerText = result.current.temp_c;
})
