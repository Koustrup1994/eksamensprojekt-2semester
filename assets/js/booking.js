function Room(roomId, beds, desc, price, imageSrc) {
  this.roomId = roomId;
  this.beds = beds;
  this.desc = desc;
  this.price = price;
  this.imageSrc = imageSrc;
}

function Reservation(roomId, dates, firstName, lastName) {
  this.roomId = roomId;
  this.dates = dates;
  this.firstName = firstName;
  this.lastName = lastName;
}

function getLocalRooms() {
  let rooms = localStorage.getItem("vbbRooms");

  if(rooms != null) {
    return JSON.parse(rooms);
  }
  else {
    return [  new Room( "1",
                        "2",
                        "Rummeligt værelse med 2 en-mands senge.",
                        "349",
                        "assets/images/rooms/room-one.jpg"),
              new Room( "2",
                        "1",
                        "Hyggeligt og lyst værelse med dobbelt seng.",
                        "449",
                        "assets/images/rooms/room-two.jpg"),
              new Room( "3",
                        "2",
                        "Hyggeligt værelse med 2 en-mands senge.",
                        "349",
                        "assets/images/rooms/room-three.jpg"),
              new Room( "4",
                        "2",
                        "Lyst og rummeligt værelse med dobbelt seng.",
                        "449",
                        "assets/images/rooms/room-four.jpg"),
              new Room( "5",
                        "2",
                        "Dejligt lyst værelse med dobbelt seng.",
                        "449",
                        "assets/images/rooms/room-five.jpg"),
              new Room( "6",
                        "2",
                        "Hyggeligt værelse med dobbelt seng.",
                        "449",
                        "assets/images/rooms/room-six.jpg")];
  }
}

function getLocalReservations() {
  let reservations = localStorage.getItem("vbbReservations");

  if(reservations != null) {
    return JSON.parse(reservations);
  }
  else {
    return [];
  }
}

function setLocalReservation(origReservations) {
  let newReservations = JSON.stringify(origReservations);

  localStorage.setItem("vbbReservations", newReservations);
}

function makeReservation(roomId, dates, firstName, lastName) {
  let origReservations = getLocalReservations();

  let newReservation = new Reservation(roomId, dates, firstName, lastName);

  origReservations.unshift(newReservation);

  setLocalReservation(origReservations);
}

function daySelect(event) {
  let date = event.target.textContent;
  if (event.target.style.background === "green") {
    event.target.style.background = "";
    if (selectedDates.includes(date)) {
      selectedDates.splice(selectedDates.indexOf(date), 1);
      console.log(selectedDates);
    }
  }
  else {
    event.target.style.background = "green";
    selectedDates.unshift(date);
    selectedDates.sort(function(a, b) {
      return a - b
    });
    console.log(selectedDates);
  }
}

function clearDates() {
  for (td of document.querySelectorAll("td")) {
    td.style.background = "";
  }
}

function pickRoom(event) {
  selectedRoom = event.target.dataset.roomid;
}

function submitReservation() {
  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;

  makeReservation(selectedRoom, selectedDates, firstName, lastName);

  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  selectedRoom = "";
  selectedDates = [];
  clearDates();
}

var selectedDates = [];
var days = [];
var selectedRoom;

window.onload = function() {
  let tableData = document.querySelectorAll("td");

  for (data of tableData) {
    data.style.height = data.clientWidth + "px";
  }

  days = document.querySelectorAll("td");

  for (day of days) {
    day.addEventListener("click", function() {
      daySelect(event);
    });
    day.selected = false;
  }
}

window.addEventListener("resize", function() {
  let tableData = document.querySelectorAll("td");

  for (data of tableData) {
    data.style.height = data.clientWidth/2 + "px";
  }
});
