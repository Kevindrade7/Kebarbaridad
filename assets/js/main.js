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
    alert('Ya formas parte de Kebarbaridad. Tu ventaja exclusiva sigue activa.');
    return;
  }

  savedEmails.push(email);
  localStorage.setItem('kb_clients', JSON.stringify(savedEmails));

 alert('Bienvenido. Tu acceso al 10% exclusivo ha quedado activado.');

  closePromo();
}
