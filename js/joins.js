/* Written By Thinh Vu
Date: 7-18-2019
For using in Joins Form */
"use Strict";
//set repeat time
setInterval(changePics, 5000);
var idx = 0;

//fucntion will change image every 2 second
function changePics(){
  var imgArray = ['destin', 'alabama', 'padre-island'];
  var img = document.getElementById("pics");
  img.src = "images/index-images/" + imgArray[idx] + ".jpg";
  img.alt = "Condo in " + imgArray[idx];
  img.style = "width: 100%; height: auto;";
  console.log(img.src);
  //change idx of pics
  if(idx < 2) idx ++;
  else idx = 0;
}
//after click submit
function showSuccess(evt){
  var form = document.getElementsByTagName("form")[0];
  if(form.checkValidity()) {
    var myWindow = window.open("done.html", "_self");
    console.log("opened a new window");
  }
}

function initialFunc(){
  addNewEventListeners();

}
//add new events to page
function addNewEventListeners(){
  var submit = document.getElementById('join')
  if(submit.addEventListener){
    submit.addEventListener("click", showSuccess, false);
    console.log("loaded submit events");
  }


}

if(window.addEventListener){
  window.addEventListener("load", initialFunc, false);
}
else if(window.attachEvent){
  window.attachEvent("onload", initialFunc);
}
