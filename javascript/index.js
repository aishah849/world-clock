function updateTime() {
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  if (singaporeElement) {
    let singaporeDateElement = singaporeElement.querySelector(".date");
    let singaporeTimeElement = singaporeElement.querySelector(".time");
    let singaporeTime = moment().tz("Asia/Singapore");

    singaporeDateElement.innerHTML = singaporeTime.format("D MMMM YYYY");
    //singaporeTimeElement.innerHTML = `${singaporeTime.format("h:mm:ss")} <small>${singaporeTime.format("A")}</small>`;
    singaporeTimeElement.innerHTML = singaporeTime.format(
      "h:mm:ss [<small>]A[<small/]"
    );
  }

  //Colombo
  let colomboElement = document.querySelector("#colombo");
  if (colomboElement) {
    let colomboDateElement = colomboElement.querySelector(".date");
    let colomboTimeElement = colomboElement.querySelector(".time");
    let colomboTime = moment().tz("Asia/Colombo");

    colomboDateElement.innerHTML = colomboTime.format("D MMMM YYYY");
    //colomboTimeElement.innerHTML = `${colomboTime.format("h:mm:ss")} <small>${colomboTime.format("A")}</small>`;
    colomboTimeElement.innerHTML = colomboTime.format(
      "h:mm:ss [<small>]A[<small/]"
    );
  }

  //Vancouver
  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("D MMMM YYYY");
    //vancouverTimeElement.innerHTML = `${vancouverTime.format("h:mm:ss")} <small>${vancouverTime.format("A")}</small>`;
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>]A[<small/]"
    );
  }

  //beirut
  let beirutElement = document.querySelector("#beirut");
  if (beirutElement) {
    let beirutDateElement = beirutElement.querySelector(".date");
    let beirutTimeElement = beirutElement.querySelector(".time");
    let beirutTime = moment().tz("Asia/beirut");

    beirutDateElement.innerHTML = beirutTime.format("D MMMM YYYY");
    //beirutTimeElement.innerHTML = `${beirutTime.format("h:mm:ss")} <small>${beirutTime.format("A")}</small>`;
    beirutTimeElement.innerHTML = beirutTime.format(
      "h:mm:ss [<small>]A[<small/]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("D MMMM YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small> ${cityTime.format("A")}<small/></div></div>
          <a href="/">All cities</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
