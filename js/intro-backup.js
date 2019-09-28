/*
 *    Author: Thinh Vu
 *    Date:   7-9-2019
 *    Filename: intro.js
 *    Using for index file
 */

var changeImg='ad1';
//create text array for slideshow

//var i;
//var banTime = setInterval(slideshow,2000);


function slideshow(){
    var value;
    step = 0.0;
    var j;
    //change text base on array every 2 seconds
    var adtext = document.querySelectorAll("article.slideshow p");
    //var i = 0;
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    //adtext.color = "rgb(" + r +"," + g +"," + b + ")";
    for(j = 0; j < 5; j++){
      step += 0.2;
      setInterval(fadeOut(adtext[i], step), 5000);
      //value =
      //adtext[i].style.opacity = step.toString();
    }
    if(i < 6) i++;
    //else i=6;
    /*
    var  = document.querySelector("article.banner img");
    banImage.src="images/banner" + changeImg +".jpg";
    if (changeImg === 'ad1')
       changeImg = 'ad2';
    else changeImg = 'ad1';*/
}

function showAd() {
  //call fadeOut for p[0] element every 2 seconds
  //for(var i = 0; i < 2; i++) { //call 5 time
  //while (index < 7){
      //fadeOut is about 10 seconds;
      /*
      for(i = 0; i < 10; i++){
      // your eye will see smooth motion with 25 images change in 1 second
        for(var j = 0; j < 25; j++){
          setTimeout(fadeOut(), 150*j);
        }
      }
      */
     setTimeout(fadeOut(), 2000);
     setTimeout(fadeOut(), 3000);
     setTimeout(fadeOut(), 4000);
     setTimeout(fadeOut(), 3500);
     /*setTimeout(fadeOut(), 4000);
     setTimeout(fadeOut(), 4500);
     setTimeout(fadeOut(), 5000);*/
    //}
  //}

}
/* The funtion will increase opacity of string in p elements
by 0.0028, and store increase amount back to amount variable
*/
const fadeOut= (function() {
  var amount = 0.0;
  return function() { //amount += 0.0028; //0.0028 seconds per a change opacity
                      amount += 0.1;
                      var adtext = document.querySelectorAll("article.slideshow p");
                      adtext[0].style.opacity = amount.toString();
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

  /*
    var spec_link = document.querySelectorAll("article.hot p")[0];
    if(spec_link.addEventListener){
        spec_link.addEventListener("click", hotviews, false);
    }
    else {
        spec_link.attachEvent("onclick", hotviews);
    }
 */
}

/*
function hotviews() {
    var propertyWidth = 280;
    var propertyHeight = 800;
    var winLeft = ((screen.width - propertyWidth) / 2);
    var winTop = ((screen.height - propertyHeight) / 2);
    var winOption = "width=300,height=670";
    winOption += ",left=" + winLeft;
    winOption += ",top=" + winTop;

    var newWindow = window.open("hot.html", "Hot Deals", winOption);
    newWindow.focus();
}*/

if (window.addEventListener) {
  window.addEventListener("load", initialContent, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", initialContent);
}
