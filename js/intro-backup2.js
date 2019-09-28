/*
 *    Author: Thinh Vu
 *    Date:   7-9-2019
 *    Filename: intro.js
 *    Using for index file
 */

var e = 0;
var value = 0.0;
//var banTime = setInterval(slideshow,2000);

async function showAd() {
  //call fadeOut for p[0] element every 2 seconds
  //for(var i = 0; i < 2; i++) { //call 5 time
      //fadeOut is about 10 seconds;
  //var promise = [];
  //while (e < 2){
    let promise = new Promise((res, rej)=> {
       for(i = 0; i < 10; i++){
      // your eye will see smooth motion with 25 images change in 1 second
        for(var j = 0; j < 25; j++){
          setTimeout(fadeOut, 150*j);
        }
      }
    });
    var result = await promise;
    console.log(result);

  //}

  //await promise[1];

}
/* The funtion will increase opacity of string in p elements
by 0.0028, and store increase amount back to amount variable
*/
/*
function fadeOut(){
  var adtext = document.querySelectorAll("article.slideshow p");
  value += 0.0028;
  if (e < 7){
    adtext[e].style.opacity = value.toString();
  }
}*/

const fadeOut= (function() {
  var amount = 0.0;
  return function() { amount += 0.0028; //0.0028 seconds per a change opacity
                      var adtext = document.querySelectorAll("article.slideshow p");
                      adtext[e].style.opacity = amount.toString();
                      return amount;}
})();

function initHideContent(){
  var texts = ["Enjoy a Relaxing for your whole life",
                "With 50% discount price at...",
                "Florida Beaches in the Summer",
                "and many Famous Places in future",
                "and many Benefits back to you",
                "We are so powerfull if we work together",
                "Join Us Now"];
  var i;
  var content = document.querySelectorAll("article.slideshow p");
  for(i = 0; i < 7; i++){
    content[i].innerHTML = texts[i];
    content[i].style.opacity = "0.0";
  }
}

function initialContent(){
  index = 0;
  initHideContent();
  showAd();
}
function addEventListeners() {
}

if (window.addEventListener) {
  window.addEventListener("load", initialContent, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", initialContent);
}
