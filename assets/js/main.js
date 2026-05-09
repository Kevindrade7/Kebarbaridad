function closePromo(){
 document.getElementById('promoPopup').style.display = 'none';
}

window.addEventListener('load', function(){
 setTimeout(function(){
   document.getElementById('promoPopup').style.display = 'flex';
 }, 1800);
});
