document.addEventListener("DOMContentLoaded", loadEvents);

function prikaziAddEvent() {
    if (document.getElementById("addEventBox").style.visibility === "hidden") {
        document.getElementById("addEventBox").style.visibility = "visible";
    } else {
        document.getElementById("addEventBox").style.visibility = "hidden";
    }

    document.getElementById("EventName").value = "";
    document.getElementById("EventDate").value = "";
    document.getElementById("EventTime").value = "";
    document.getElementById("EventDescription").value = "";
    document.getElementById("EventPicture").value = "";
}

var classVar = 0;

function saveEvent() {
    var nameValue = document.getElementById("EventName").value;
    var dateValue = document.getElementById("EventDate").value;
    var timeValue = document.getElementById("EventTime").value;
    var descValue = document.getElementById("EventDescription").value;
    var imgURL = document.getElementById("EventPicture").value;

    var event = {
        id: classVar,
        name: nameValue,
        date: dateValue,
        time: timeValue,
        description: descValue,
        picture: imgURL
    };

    var events = JSON.parse(localStorage.getItem("events")) || [];
    events.push(event);
    localStorage.setItem("events", JSON.stringify(events));

    displayEvent(event);
    classVar++;
}

function displayEvent(event) {
    var sdiv = document.createElement("div");
    var sdiv2 = document.createElement("div");
    var sdiv3 = document.createElement("div");
    var savedName = document.createElement("p");
    var savedDate = document.createElement("p");
    var savedTime = document.createElement("p");
    var savedDesc = document.createElement("p");
    var savedPic = document.createElement("img");
    var editButton = document.createElement("Button");
    var deleteButton = document.createElement("Button");

    savedName.setAttribute("id", event.id + "Name");
    savedDate.setAttribute("id", event.id + "Date");
    savedTime.setAttribute("id", event.id + "Time");
    savedDesc.setAttribute("id", event.id + "Desc");
    savedPic.setAttribute("id", event.id + "Pic");
    editButton.setAttribute("id", event.id);

    var savedNameText = document.createTextNode("Event name: " + event.name);
    var savedDateText = document.createTextNode("Date: " + event.date);
    var savedTimeText = document.createTextNode("Time: " + event.time);
    var savedDescText = document.createTextNode("Event description: " + event.description);
    var editText = document.createTextNode("Edit");
    var deleteText = document.createTextNode("Delete");

    savedName.appendChild(savedNameText);
    savedDate.appendChild(savedDateText);
    savedTime.appendChild(savedTimeText);
    savedDesc.appendChild(savedDescText);
    savedPic.setAttribute("src", event.picture);
    editButton.appendChild(editText);
    deleteButton.appendChild(deleteText);

    sdiv.appendChild(savedName);
    sdiv2.appendChild(savedDate);
    sdiv2.appendChild(savedTime);
    sdiv.appendChild(sdiv2);
    sdiv.appendChild(savedDesc);
    sdiv.appendChild(savedPic);
    sdiv3.appendChild(editButton);
    sdiv3.appendChild(deleteButton);
    sdiv.appendChild(sdiv3);

    sdiv.style.width = "500px";
    sdiv.style.padding = "10px";
    sdiv.style.backgroundColor = "#6be3b3";
    sdiv.style.border = "2px solid green";
    sdiv.style.borderRadius = "25px";
    sdiv.style.margin = "10px";
    savedPic.style.width = "350px";
    savedPic.style.height = "200px";
    sdiv3.style.textAlign = "right";
    sdiv3.style.margin = "5px";

    deleteButton.addEventListener("click", function () {
        deleteEvent(event.id);
    });
    editButton.addEventListener("click", function () {
        editEvent(event.id);
    });

    const existDiv = document.getElementById("allSavedEvents");
    existDiv.appendChild(sdiv);
}

function deleteEvent(id) {
    var events = JSON.parse(localStorage.getItem("events")) || [];
    events = events.filter(event => event.id !== id);
    localStorage.setItem("events", JSON.stringify(events));
    document.getElementById(id + "Name").parentElement.remove();
}

function editEvent(id) {
    if (document.getElementById("addEventBox").style.visibility === "hidden") {
        document.getElementById("addEventBox").style.visibility = "visible";
    }

    var events = JSON.parse(localStorage.getItem("events")) || [];
    var event = events.find(event => event.id === id);

    document.getElementById("EventName").value = event.name;
    document.getElementById("EventDate").value = event.date;
    document.getElementById("EventTime").value = event.time;
    document.getElementById("EventDescription").value = event.description;
    document.getElementById("EventPicture").value = event.picture;

    const sb = document.querySelector("#saveButton");
    sb.remove();
    var newButton = document.createElement("Button");
    newButton.className = "btn btn-primary save pull-right";
    newButton.innerHTML = "Save";
    newButton.id = "saveButton";
    const cf = document.getElementById("btns");
    cf.appendChild(newButton);

    newButton.addEventListener("click", function () {
        saveEditEvent(id);
    });
    newButton.addEventListener("click", prikaziAddEvent);
}

function saveEditEvent(id) {
    var name = document.getElementById("EventName").value;
    var date = document.getElementById("EventDate").value;
    var time = document.getElementById("EventTime").value;
    var desc = document.getElementById("EventDescription").value;
    var imgURL = document.getElementById("EventPicture").value;

    var events = JSON.parse(localStorage.getItem("events")) || [];
    var event = events.find(event => event.id === id);

    event.name = name;
    event.date = date;
    event.time = time;
    event.description = desc;
    event.picture = imgURL;

    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById(id + "Name").innerHTML = "Event name: " + name;
    document.getElementById(id + "Date").innerHTML = "Date: " + date;
    document.getElementById(id + "Time").innerHTML = "Time: " + time;
    document.getElementById(id + "Desc").innerHTML = "Event description: " + desc;
    document.getElementById(id + "Pic").src = imgURL;

    const sb = document.querySelector("#saveButton");
    sb.remove();
    var newButton = document.createElement("Button");
    newButton.className = "btn btn-primary save pull-right";
    newButton.innerHTML = "Save";
    newButton.id = "saveButton";
    const cf = document.getElementById("btns");
    cf.appendChild(newButton);

    newButton.addEventListener("click", saveEvent);
    newButton.addEventListener("click", prikaziAddEvent);
}

function loadEvents() {
    var events = JSON.parse(localStorage.getItem("events")) || [];
    events.forEach(event => {
        displayEvent(event);
        classVar = Math.max(classVar, event.id + 1);
    });
}

const aneb = document.querySelector("#addNewEventButton");
aneb.addEventListener("click", prikaziAddEvent);
const cb = document.querySelector("#cancelButton");
cb.addEventListener("click", prikaziAddEvent);
const sb = document.querySelector("#saveButton");
sb.addEventListener("click", saveEvent);
sb.addEventListener("click", prikaziAddEvent);
const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click", function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "admin" && password === "admin") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("addNewEventButton").style.display = "block";
        alert("Login successful!");
    } else {
        alert("Incorrect username or password.");
    }
var token = btoa(username + ":" + password);
localStorage.setItem("authToken", token);
});
