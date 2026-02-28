document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});


// ----------------- Janela Menu -----------------

document.getElementById('menu-float').addEventListener('click' , function() 
  {
    var menuContet = document.getElementById('menu-list');
    if (menuContet.classList.contains('flex')) {
      menuContet.classList.add('hidden');
      menuContet.classList.remove('flex');
    } else {
      menuContet.classList.add('flex');
      menuContet.classList.remove('hidden');
    }

  }
);
