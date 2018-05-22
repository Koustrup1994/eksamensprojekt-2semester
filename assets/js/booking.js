function Room(roomId, beds, desc, price, imageSrc) {
  this.roomId = roomId;
  this.beds = beds;
  this.desc = desc;
  this.price = price;
  this.imageSrc = imageSrc;
}

function Reservation(roomId, dates, firstName, lastName, email) {
  this.roomId = roomId;
  this.dates = dates;
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
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

function makeReservation(roomId, dates, firstName, lastName, email) {
  let origReservations = getLocalReservations();

  let newReservation = new Reservation(roomId, dates, firstName, lastName, email);

  origReservations.unshift(newReservation);

  setLocalReservation(origReservations);
}

//Function is called when a day on the calendar is clicked
function daySelect(event) {
  let date = event.target.textContent + "-05" + "-2018";
  //If day is green, try to remove selection
  if (event.target.style.background === "green") {
    //Go on if selectedDates contains chosen date
    if (selectedDates.includes(date)) {
      /*Checks if chosen date is first or last date in selectedDates.
      Important for making sure that user can not remove dates that are not
      the first or last of selectedDates.
      If the chosen date is either the last or first date of selectedDates,
      the date is removed from the array*/
      if (!inMiddle(selectedDates, date)) {
        event.target.style.background = "";
        selectedDates.splice(selectedDates.indexOf(date), 1);
        console.log(selectedDates);
      }
    }
  }
  //If chosen date is neighbor to either the first or last date in selectedDates the chosen date can be added to the array. Important for securing that selectedDates does not contain any holes
  else if (isNeighbor(selectedDates, date)) {
    event.target.style.background = "green";
    selectedDates.unshift(date);
    selectedDates.sort(function(a, b) {
      //Very incomplete... only checks on day. Not month nor year,
      return a.split("-")[0] - b.split("-")[0];
    });
    console.log(selectedDates);
  }
}

//clears chosen dates. Used for cleaning after ended reservation
function clearDates() {
  for (td of document.querySelectorAll("td")) {
    td.style.background = "";
  }
}

// Selects a room for reservation
function pickRoom(event) {
  selectedRoom = event.target.dataset.roomid;
}

function submitReservation() {
  let firstName = document.querySelector("#fname").value;
  let lastName = document.querySelector("#lname").value;
  let email = document.querySelector("#email").value;

  makeReservation(selectedRoom, selectedDates, firstName, lastName, email);

  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  selectedRoom = "";
  selectedDates = [];
  clearDates();
}

//Checks if item is equal to the first or the last item in the array. If not it is assumed that the item is somewhere in the middle of the array. Because of that it is needed to check that the array contains the item, if that information is needed.
function inMiddle(array, item) {
  let answer = true;
  if (array[0] === array[array.indexOf(item)] || array[array.length - 1] === array[array.indexOf(item)]) {
    answer = false;
  }

  return answer;
}

//Checks if item is neighbor to either the first or the last item in the array
function isNeighbor(array, item) {
  let answer = false;

  if (!array.includes(item)) {
    if (array.length != 0) {
      let firstDay = array[0].split("-")[0];
      let firstMonth = array[0].split("-")[1];
      let firstYear = array[0].split("-")[2];
      let lastDay = array[array.length-1].split("-")[0];
      let lastMonth = array[array.length-1].split("-")[1];
      let lastYear = array[array.length-1].split("-")[2];

      let itemDay = item.split("-")[0];
      let itemMonth = item.split("-")[1];
      let itemYear = item.split("-")[2];

      if (firstYear == itemYear) {
        if (firstMonth == itemMonth) {
          if ((firstDay == parseInt(itemDay) + 1) || firstDay == parseInt(itemDay) - 1) {
            answer = true;
          }
        }
      }
      if (lastYear == itemYear) {
        if (lastMonth == itemMonth) {
          if ((lastDay == parseInt(itemDay) + 1) || lastDay == parseInt(itemDay) - 1) {
            answer = true;
          }
        }
      }
    }
    else {
      answer = true;
    }
  }
  return answer;
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

  //adds eventlisteners for all dates in the calendar
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
