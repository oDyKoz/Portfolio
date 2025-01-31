document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});


// ----------------- Janela Menu -----------------

document.getElementById('menu-button').addEventListener('click' , function
() {
    var menuContet = document.getElementById('menu-content');
    if (menuContet.style.display === 'block') {
      menuContet.style.display = 'none';
    } else {
      menuContet.style.display = 'block';
      this.textConten = 'Fechar Menu'
    }

});