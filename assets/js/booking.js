var selectedDates = [];

window.onload = function() {
  let tableData = document.querySelectorAll("td");

  for (data of tableData) {
    data.style.height = data.clientWidth + "px";
  }
}

window.addEventListener("resize", function() {
  let tableData = document.querySelectorAll("td");

  for (data of tableData) {
    data.style.height = data.clientWidth/2 + "px";
  }
});
