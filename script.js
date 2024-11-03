document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
  
    // Verifica se i cookie sono già stati accettati
    if (!localStorage.getItem('cookiesAccepted')) {
      cookieBanner.style.display = 'flex';
    } else {
        cookieBanner.style.display = 'none'; // Nasconde il banner se i cookie sono già accettati
    }


    // cambiare id di tutti i bottoni in btn e poi su getElemntById cambiare l'id con "btn" così il sound va per tutti i bottoni
    acceptCookiesButton.addEventListener('click', function() {
      const audio = new Audio('Sounds/sfx_click.wav'); 
      audio.play();
   });
    
  
    // Gestione del click sul pulsante di accettazione
    acceptCookiesButton.addEventListener('click', function() {
      localStorage.setItem('cookiesAccepted', 'true');
      cookieBanner.style.display = 'none';
    });
  });



  //sono altamente skibidi!1111!!!

  document.getElementById('background-music').volume = 0.5;
