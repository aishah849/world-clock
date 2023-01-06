function updateTime() {
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment().tz("Asia/Singapore");

  singaporeDateElement.innerHTML = singaporeTime.format("D MMMM YYYY");
  //singaporeTimeElement.innerHTML = `${singaporeTime.format("h:mm:ss")} <small>${singaporeTime.format("A")}</small>`;
  singaporeTimeElement.innerHTML = singaporeTime.format(
    "h:mm:ss [<small>]A[<small/]"
  );

  //Colombo
  let colomboElement = document.querySelector("#colombo");
  let colomboDateElement = colomboElement.querySelector(".date");
  let colomboTimeElement = colomboElement.querySelector(".time");
  let colomboTime = moment().tz("Asia/Colombo");

  colomboDateElement.innerHTML = colomboTime.format("D MMMM YYYY");
  //colomboTimeElement.innerHTML = `${colomboTime.format("h:mm:ss")} <small>${colomboTime.format("A")}</small>`;
  colomboTimeElement.innerHTML = colomboTime.format(
    "h:mm:ss [<small>]A[<small/]"
  );
}

updateTime();
setInterval(updateTime, 1000);
