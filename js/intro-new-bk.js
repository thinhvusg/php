/*
 *    Author: Thinh Vu
 *    Date:   7-9-2019
 *    Filename: intro.js
 *    Using for index file
 */

var e;
//var value;
//var banTime = setInterval(slideshow,2000);

function showAd() {
    return new Promise((res, rej)=> {
       var finish = false;
       for(i = 0; i < 20; i++){
      // your eye will see smooth motion with 25 images change in 1 second
        for(var j = 1; j < 26; j++){
          setTimeout(fadeOut, 40*(i+j));
        }
        finish = true;
      }
      if(finish) res(1);
      else rej(0);
    });
}
/* The funtion will increase opacity of string in p elements
by 0.0028, and store increase amount back to amount variable
*/


const fadeOut = function(){
  var adtext = document.querySelectorAll("article.slideshow p")[e];
  var old_opacity = parseFloat(adtext.style.opacity);
  var new_opacity;
  if(old_opacity <= 0.5){
    new_opacity = old_opacity + 0.001;
    adtext.style.opacity = new_opacity.toString();
  }
}

const img_fadeOut = function(){
  var adtext = document.querySelectorAll("article.slideshow img")[0];
  var old_opacity = parseFloat(adtext.style.opacity);
  var new_opacity;
  if(old_opacity <= 1.0){
    new_opacity = old_opacity + 0.001;
    adtext.style.opacity = new_opacity.toString();
  }
}
/*
const fadeOut= (function() {
  var amount = 0.0;
  return function() { amount += 0.001; //0.001 seconds per a change opacity
                      var adtext = document.querySelectorAll("article.slideshow p");
                      adtext[e].style.opacity = amount.toString();
                      if (amount > 0.5) amount = 0.0;
                      return amount; }
})(); */
/* this function will create texts and hide them */
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
  for(i = 0; i < 7; i++){ //add ads to p elements
    content[i].innerHTML = texts[i];
    content[i].style.opacity = "0.0";
  }
  content[6].style.color = "#0000FF";
  content[6].style.fontWeight = "bold";
}

/*----------------------------------------
* the function will call promise function
------------------------------------------*/
async function callAd() {
  e += await showAd();
}
//---------------------------------------------------
function addPics(){
  var article = document.querySelectorAll("article.slideshow")[0];
  var img = document.createElement("img");
  img.src = "images/index-images/florida-beach.jpg";
//add a bootstrap class for the image
  img.className = "mx-auto d-block rounded";
  var para3 = document.querySelectorAll("article.slideshow p")[3];
  article.insertBefore(img, para3);
  img.style.opacity = 0.0;
  setTimeout()
  setTimeout(removePics, 7000);    //case 1: pic.src = "../images/index-image/new-york-city.jpg";
}
//---------------------------------------------------
function removePics(){
  var article = document.querySelectorAll("article.slideshow")[0];
  var img = document.querySelectorAll("img")[0];
  article.removeChild(img);
    //case 1: pic.src = "../images/index-image/new-york-city.jpg";
}
/*----------------------------------------------
* this function load ads and pics to introduce*
------------------------------------------------*/
async function initialContent(){
  initHideContent();
  e = 0;
  var time = 2800;
  await showAd();
  setTimeout(callAd, time);
  setTimeout(callAd, time*2);
  setTimeout(addPics,time*2 + 1000);
  setTimeout(callAd, time*3);
  setTimeout(callAd, time*4);
  setTimeout(callAd, time*5);
  setTimeout(callAd, time*6);

  //setTimeout(callAdd,)

}
function addEventListeners() {
}

if (window.addEventListener) {
  window.addEventListener("load", initialContent, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", initialContent);
}
