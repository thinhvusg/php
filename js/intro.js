/*
 *    Author: Thinh Vu
 *    Date:   7-9-2019
 *    Filename: intro.js
 *    Using for index file
 */

var e;
var lang = 'en';
//var value;
//var banTime = setInterval(slideshow,2000);
console.log(window.screen.width);
function showAd() {
    return new Promise((res, rej)=> {
       var finish = false;
       for(i = 1; i < 75; i++){ // fadeout within 10s
      // your eye will see smooth motion with 25 images change in 1 second
        //for(var j = 1; j < 26; j++){
          setTimeout(fadeOut, 40*(i));
        }
        finish = true;
      //}
      if(finish) res(1);
      else rej(0);
    });
}
/* The funtion will increase opacity of content in p elements
* by how long for fading and level of opacity
* in this inro used 3s and 0.5
* info will store and get from p element in DOM
*/
const fadeOut = function(){
  var adtext = document.querySelectorAll("article.slideshow p")[e];
  var old_opacity = parseFloat(adtext.style.opacity);
  var new_opacity;
  if(old_opacity <= 0.5){
    new_opacity = old_opacity + 0.0066;
    adtext.style.opacity = new_opacity.toString();
  }
}
//------------------------------------------------------------------
/* The funtion will increase opacity of content in img elements
* by how long for fading and level of opacity
* in this inro used 3s and 1
* info will store and get from img element in DOM
*/
const img_fadeInOut = function(in_out){
  var img = document.querySelectorAll("article.slideshow img")[0];
  var old_opacity = parseFloat(img.style.opacity);
  var new_opacity;
  if(in_out == 1){//fade out in 3s
    if(old_opacity <= 1.0){
      new_opacity = old_opacity + 0.013;
      img.style.opacity = new_opacity.toString();
    }
  }
  else {//fade in in 2s
    if(old_opacity >= 0.0){
      new_opacity = old_opacity - 0.02;
      img.style.opacity = new_opacity.toString();
    }
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
  var texts;
  if(lang=='vn'){
    texts = [" Một sự đầu tư nhỏ để tận hưởng thư giãn trọn đời",
                  "Vói một giá 40%-70% discount ở nhưng nơi đẹp nhất..",
                  "Như Florida Beaches vào mùa hè",
                  "và nhiều nơi nỗi tiếng khác trong tương lai...",
                  "và nhiều lợi ích khác đến vói bạn",
                  "Chúng ta sẽ vô cùng mạnh mẽ khi join với nhau",
                  "Join Us Now"];
  }
  else if(lang == 'en'){
    texts = [" A small investment for your whole life relaxing",
                "With 40% to 70% discount price at...",
                "Florida Beaches in the Summer",
                "and many Famous Places in future",
                "and many Benefits back to you",
                "We are so powerfull if we join together",
                "Join Us Now"];
  }

  var i;
  var content = document.querySelectorAll("article.slideshow p");
  for(i = 0; i < 7; i++){ //add ads to p elements
    content[i].innerHTML = texts[i];
    content[i].style.opacity = "0.0";
  }
  content[6].style.color = "#0000FF";
  content[6].style.fontWeight = "bold";
//  var ft = document.querySelectorAll("footer")[0];
//  ft.style.display = "none"; //hide footer
}

/*----------------------------------------
* the function will call promise function
------------------------------------------*/
async function callAd() {
  e += await showAd();
}
//---------------------------------------------------
function addPic(pos, pic_name){
  var article = document.querySelectorAll("article.slideshow div")[0];
  var img = document.createElement("img");
//  img.src = "images/index-images/florida-beach.jpg";

  //img.style = "width: 450px; height: 300px;";

//add a bootstrap class for the image

  var para3 = document.querySelectorAll("article.slideshow p")[pos];
  article.insertBefore(img, para3);
  img.className = "mx-auto d-block rounded";
  img.src = "images/index-images/" + pic_name;
  img.style.opacity = 0.0; //set image clear
  var i;
  for(i = 1; i < 75; i++){ // fadeout within 3s
     setTimeout(()=>{img_fadeInOut(1)}, 40*(i));
   }
}
//---------------------------------------------------
function hidePic(){
  var article = document.querySelectorAll("article.slideshow div")[0];
  var img = document.querySelectorAll("img")[0];
  var i;
 for(i = 1; i < 50; i++){ // fadein within 3s
    setTimeout(()=>{img_fadeInOut(0)}, 40*(i));
  }

}

//delete a image element
function delPic(img_idx){
  var article = document.querySelectorAll("article.slideshow div")[0];
  var img = document.querySelectorAll("img")[img_idx];
  article.removeChild(img);
}
/*----------------------------------------------
* this function load ads and pics to introduce*
------------------------------------------------*/
async function initialContent(){
  initHideContent();
  e = 0;
  var s = 1000; // 1s equal 1000 miliseconds
  await showAd(); //1
  setTimeout(callAd, s*3); //show text2 at 3s after
  setTimeout(callAd, s*6); //text3
  //show pic in 3s fater text3 0.5s
  setTimeout(()=>{addPic(3,"florida-idx.jpg")}, s*6 + (s/2));
  //after 3s, stay for 1s, then fadein in 3s
  setTimeout(hidePic, s*9 + s);
  //delete img after fade in in 3s
  setTimeout(()=>{delPic(0)}, s*12);
  setTimeout(callAd, s*12);//show text4 at s 12
  setTimeout(()=>{addPic(4,"newyork-idx.jpg")}, s*12 + s);
  //hide pic at s 17 + 1
  setTimeout(hidePic, s*16 + s);
  setTimeout(()=>{delPic(0)}, s*19);
  setTimeout(callAd, s*19);
  setTimeout(callAd, s*22);
  setTimeout(callAd, s*25);
  //setTimeout(()=>{var ft =document.querySelectorAll("footer")[0];
  //                ft.style.display = "block"}, s*28);
}
function addEventListeners() {
}

if (window.addEventListener) {
  window.addEventListener("load", initialContent, false);
} else if (window.attachEvent)  {
  window.attachEvent("onload", initialContent);
}
