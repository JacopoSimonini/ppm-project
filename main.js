var aperto = false;
var open_n = false;
var open_s = false;
var open_c = false;

function tooglee(){
   if(!aperto){
      document.getElementById('menu').style.marginLeft = "0px";
      document.getElementById('menu_2').style.marginLeft = "0px";
      aperto = true;
   }
}

function chiusura(){
   if(aperto){
      document.getElementById('menu').style.marginLeft = "-515px";
      document.getElementById('menu_2').style.marginLeft ="-1840px";
      aperto = false;
   }
}
function menu_n(){
   if(!open_n){
      document.getElementById('phone-new').style.display = "initial";
      /*document.querySelector('.new-lateral').style.paddingRight = "9px";*/
      document.querySelector('.new-lateral').style.borderLeft = "9px solid dodgerblue";
      open_n = true;}
   else {
      document.getElementById('phone-new').style.display = "none";
      document.querySelector('.new-lateral').style.border = "none";
      open_n = false;
   }
}
function menu_s(){
   if(!open_s){
      document.getElementById('sport-phone').style.display = "initial";
      document.querySelector('.sport-lateral').style.borderLeft = "9px solid dodgerblue";
      open_s = true;}
   else {
      document.getElementById('sport-phone').style.display = "none";
      document.querySelector('.sport-lateral').style.border = "none";
      open_s = false;
   }
}

function menu_c(){
   if(!open_c){
      document.getElementById('counties-phone').style.display = "initial";
      document.querySelector('.counties-lateral').style.borderLeft = "9px solid dodgerblue";
      open_c = true;}
   else {
      document.getElementById('counties-phone').style.display = "none";
      document.querySelector('.counties-lateral').style.border = "none";
      open_c = false;
   }
}