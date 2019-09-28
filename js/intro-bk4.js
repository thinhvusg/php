/*
 *    Author: Thinh Vu
 *    Date:   7-9-2019
 *    Filename: intro.js
 *    Using for index file
 */

var e;
//var value;
//var banTime = setInterval(slideshow,2000);

function showAd(parent_e, child_e, index) {

    return new Promise((res, rej)=> {
       var finish = false;
       for(i = 0; i < 20; i++){
      // your eye will see smooth motion with 25 images change in 1 second
        for(var j = 1; j < 26; j++){
          setTimeout(fadeOut(parent_e, child_e, index), 40*(i+j));
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


const fadeOut = function(parent_e, child_e, index){
  var adtext = document.querySelectorAll(parent_e + " " + child_e)[index];
  var old_opacity = parseFloat(adtext.style.opacity);
  console.log(old_opacity);
  var new_opacity, limit_opacity, inc_amount;
  if (child_e==="img") {
    limit_opacity = 1.0;
    inc_amount = 0.002
  }
  else {
    limit_opacity = 0.5;
    inc_amount = 0.001;
  }
  if(old_opacity <= limit_opacity){
    new_opacity = old_opacity + inc_amount;
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
async function callAd(parent_e, child_e, index) {
  e += await showAd(parent_e, child_e, index);
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
  await showAd("article.slideshow", "p", e);
/*
  setTimeout(callAd("article.slideshow", "p", 1), time);
  setTimeout(callAd("article.slideshow", "p", 2), time*2);
  setTimeout(addPics, time*2 + 2000);
  setTimeout(callAd("article.slideshow", "p", 3), time*3);
  setTimeout(callAd("article.slideshow", "p", 4), time*4);
  setTimeout(callAd("article.slideshow", "p", 5), time*5);
  setTimeout(callAd("article.slideshow", "p", 6), time*6);*/

  //setTimeout(callAdd,)

}
function addEventListeners() {
}

if (window.addEventListener) {
  window.addEventListener("load", initialContent, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", initialContent);
}
