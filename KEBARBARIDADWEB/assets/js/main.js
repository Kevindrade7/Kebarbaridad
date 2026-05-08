 function openBook() {
      document.getElementById('bookOverlay').classList.add('open');
      document.body.style.overflow = 'hidden';
      // Set min date to today
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('bookDate').min = today;
      document.getElementById('bookDate').value = today;
    }
    function closeBook() {
      document.getElementById('bookOverlay').classList.remove('open');
      document.body.style.overflow = '';
      // Reset form
      document.getElementById('bookStep1').style.display = 'block';
      document.getElementById('bookStep2').style.display = 'none';
      document.querySelectorAll('input[name="bookSvc"]').forEach(r => r.checked = false);
      document.getElementById('bookName').value = '';
      document.getElementById('bookPhone').value = '';
      document.getElementById('bookTime').value = '';
    }
    document.getElementById('bookOverlay').addEventListener('click', e => {
      if (e.target === e.currentTarget) closeBook();
    });

    function submitBooking() {
      const svcEl  = document.querySelector('input[name="bookSvc"]:checked');
      const name   = document.getElementById('bookName').value.trim();
      const phone  = document.getElementById('bookPhone').value.trim();
      const date   = document.getElementById('bookDate').value;
      const time   = document.getElementById('bookTime').value;

      if (!svcEl)  { alert('Por favor, elige un servicio.'); return; }
      if (!name)   { document.getElementById('bookName').focus(); return; }
      if (!date)   { document.getElementById('bookDate').focus(); return; }
      if (!time)   { document.getElementById('bookTime').focus(); return; }

      const svc      = svcEl.value;
      const dur      = parseInt(svcEl.dataset.dur);
      const price    = svcEl.dataset.price;

      // Build Google Calendar URL
      // Format: YYYYMMDDTHHMMSS
      const [year, month, day] = date.split('-');
      const [hour, min]        = time.split(':');
      const startDT = `${year}${month}${day}T${hour}${min}00`;

      // Calculate end time
      const startDate = new Date(parseInt(year), parseInt(month)-1, parseInt(day), parseInt(hour), parseInt(min));
      startDate.setMinutes(startDate.getMinutes() + dur);
      const endY = startDate.getFullYear();
      const endM = String(startDate.getMonth()+1).padStart(2,'0');
      const endD = String(startDate.getDate()).padStart(2,'0');
      const endH = String(startDate.getHours()).padStart(2,'0');
      const endMin = String(startDate.getMinutes()).padStart(2,'0');
      const endDT  = `${endY}${endM}${endD}T${endH}${endMin}00`;

      const title   = encodeURIComponent(`Ke Barbaridad – ${svc}`);
      const details = encodeURIComponent(`Servicio: ${svc}\nCliente: ${name}\nTeléfono: ${phone}\nPrecio: ${price}\n\nBarbería Kevin Andrade\nCarrer dels Mercaders 1, Vilanova i la Geltrú\nTel: 633 631 231`);
      const location = encodeURIComponent('Carrer dels Mercaders 1, Vilanova i la Geltrú, Barcelona');

      const gcUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDT}/${endDT}&details=${details}&location=${location}&sf=true&output=xml`;

      window.open(gcUrl, '_blank', 'noopener,noreferrer');

      // Show success step
      
    }
