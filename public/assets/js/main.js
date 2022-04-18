const cityName = document.getElementById("cityName");
const submitbtn = document.getElementById("submitbtn");
const city_name = document.getElementById("city_name");

const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");

const getInfo = async (event) => {
  event.preventDefault();

  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innertext = `Please Enter City Name before Search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f2be014f916af53c6ee5523ce91a567b`;
      const response = await fetch(url);
      const data = await response.json();
      const arrdata = [data];
      city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
      temp.innerText = arrdata[0].main.temp;

      const temp_mood = arrdata[0].weather[0].main;
      if (temp_mood == "Clear") {
        temp_status.innerHTML = "<i class='fa-duotone fa-sun'></i>";
          // "<i class='fa fa-sun' style='color: #eccc68'></i>";
      } else if (temp_mood == "Clouds") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud' style='color: #f1f2f6'></i>";
      } else if (temp_mood == "Rain") {
        temp_status.innerHTML =
          "<i class='fa fa-cloud-rain' style='color: #a4b0be></i>";
      } else {
        temp_status.innerHTML =
          "<i class='fa fa-sun' style='color: #eccc68'></i>";
      }
    } catch {
      city_name.innertext = `Please Enter Proper City Name.`;
    }
  }
};
submitbtn.addEventListener("click", getInfo);
