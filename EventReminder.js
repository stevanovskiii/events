

function prikaziAddEvent(){
if(document.getElementById("addEventBox").style.visibility==="hidden"){
document.getElementById("addEventBox").style.visibility="visible";
}else{
document.getElementById("addEventBox").style.visibility="hidden";
}

document.getElementById("EventName").value="";
document.getElementById("EventDate").value="";
document.getElementById("EventTime").value="";
document.getElementById("EventDescription").value="";
document.getElementById("EventPicture").value="";
}

var classVar=0;

function saveEvent(){

var sdiv=document.createElement("div");
var sdiv2=document.createElement("div");
var sdiv3=document.createElement("div");
var savedName=document.createElement("p");
var savedDate=document.createElement("p");
var savedTime=document.createElement("p");
var savedDesc=document.createElement("p");
var savedPic=document.createElement("img");
var editButton=document.createElement("Button");
var deleteButton=document.createElement("Button");
var loginButton=document.createElement("Button");


savedName.setAttribute("id",classVar+"Name");
savedDate.setAttribute("id",classVar+"Date");
savedTime.setAttribute("id",classVar+"Time");
savedDesc.setAttribute("id",classVar+"Desc");
savedPic.setAttribute("id",classVar+"Pic");
editButton.setAttribute("id",classVar);
//deleteButton.setAttribute("id",classVar);

var nameValue=document.getElementById("EventName").value;
var dateValue=document.getElementById("EventDate").value;
var timeValue=document.getElementById("EventTime").value;
var descValue=document.getElementById("EventDescription").value;
var imgURL=document.getElementById("EventPicture").value;

var savedNameText=document.createTextNode("Event name: "+nameValue);
var savedDateText=document.createTextNode("Date: "+dateValue);
var savedTimeText=document.createTextNode("Time: "+timeValue);
var savedDescText=document.createTextNode("Event description: "+descValue);
var editText=document.createTextNode("Edit");
var deleteText=document.createTextNode("Delete");

savedName.appendChild(savedNameText);
savedDate.appendChild(savedDateText);
savedTime.appendChild(savedTimeText);
savedDesc.appendChild(savedDescText);
savedPic.setAttribute("src",imgURL);
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

sdiv.style.width="500px";
sdiv.style.padding="10px";
sdiv.style.backgroundColor="#6be3b3";
sdiv.style.border="2px solid green";
sdiv.style.borderRadius="25px";
sdiv.style.margin="10px";
savedPic.style.width="350px";
savedPic.style.height="200px";
sdiv3.style.textAlign="right";
sdiv3.style.margin="5px";


deleteButton.addEventListener("click",deleteEvent);
editButton.addEventListener("click",function(){editEvent(editButton.id);});
loginButton.addEventListener("click",function(){
    console.log('asdasd')
});

function deleteEvent(){
sdiv.remove();
}

classVar++;

const existDiv=document.getElementById("allSavedEvents");
existDiv.appendChild(sdiv);
}

function editEvent(classVar){
if(document.getElementById("addEventBox").style.visibility==="hidden"){
document.getElementById("addEventBox").style.visibility="visible";
}
var editName=document.querySelector("#EventName");
var editDate=document.querySelector("#EventDate");
var editTime=document.querySelector("#EventTime");
var editDesc=document.querySelector("#EventDescription");
var editImgURL=document.querySelector("#EventPicture");

editName.value=document.getElementById(classVar+"Name").innerHTML.substr(12);
editDate.value=document.getElementById(classVar+"Date").innerHTML.substr(6);
editTime.value=document.getElementById(classVar+"Time").innerHTML.substr(6);
editDesc.value=document.getElementById(classVar+"Desc").innerHTML.substr(19);
editImgURL.value=document.getElementById(classVar+"Pic").getAttribute("src");

const sb = document.querySelector("#saveButton");
sb.remove();
var newButton=document.createElement("Button");
newButton.className="btn btn-primary save pull-right";
newButton.innerHTML="Save";
newButton.id="saveButton";
const cf=document.getElementById("btns");
cf.appendChild(newButton);

newButton.addEventListener("click",function f(){saveEditEvent(classVar);});
newButton.addEventListener("click",prikaziAddEvent);
}

function saveEditEvent(classVar){
var name=document.getElementById("EventName").value;
var date=document.getElementById("EventDate").value;
var time=document.getElementById("EventTime").value;
var desc=document.getElementById("EventDescription").value;
var imgURL=document.getElementById("EventPicture").value;

document.getElementById(classVar+"Name").innerHTML="Event name: "+name;
document.getElementById(classVar+"Date").innerHTML="Date: "+date;
document.getElementById(classVar+"Time").innerHTML="TIme: "+time;
document.getElementById(classVar+"Desc").innerHTML="Event description: "+desc;
document.getElementById(classVar+"Pic").src=imgURL;

const sb = document.querySelector("#saveButton");
sb.remove();
var newButton=document.createElement("Button");
newButton.className="btn btn-primary save pull-right";
newButton.innerHTML="Save";
newButton.id="saveButton";
const cf=document.getElementById("btns");
cf.appendChild(newButton);

newButton.addEventListener("click",saveEvent);
newButton.addEventListener("click",prikaziAddEvent);
}

const aneb = document.querySelector("#addNewEventButton");
aneb.addEventListener("click",prikaziAddEvent);
const cb = document.querySelector("#cancelButton");
cb.addEventListener("click",prikaziAddEvent);
const sb = document.querySelector("#saveButton");
sb.addEventListener("click",saveEvent);
sb.addEventListener("click",prikaziAddEvent);
const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener("click",function(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "admin" && password === "admin") {
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("addNewEventButton").style.display = "block";
            alert("Login successful!");
        } else {
            alert("Incorrect username or password.");
        }
});
