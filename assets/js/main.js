function closePromo(){
 document.getElementById('promoPopup').style.display='none';
}

window.onload = function(){
 setTimeout(()=>{
   document.getElementById('promoPopup').style.display='flex';
 },1500);
}
function subscribePromo(){
  const input = document.getElementById('promoEmail');
  const email = input.value.trim().toLowerCase();

  if(!email){
    alert('Introduce tu correo');
    return;
  }

  if(!email.includes('@')){
    alert('Correo no válido');
    return;
  }

  const savedEmails = JSON.parse(localStorage.getItem('kb_clients')) || [];

  if(savedEmails.includes(email)){
    alert('Ya te tenemos como cliente. Tu descuento sigue guardado.');
    return;
  }

  savedEmails.push(email);
  localStorage.setItem('kb_clients', JSON.stringify(savedEmails));

  alert('Bienvenido a Ke Barbaridad. Tu 10% ya está reservado.');

  closePromo();
}
