function closePromo(){
 document.getElementById('promoPopup').style.display='none';
}

window.onload = function(){
 setTimeout(()=>{
   document.getElementById('promoPopup').style.display='flex';
 },1500);
}
