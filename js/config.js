document.addEventListener("DOMContentLoaded", function () {
  if (window.location.hash) {
    history.replaceState(null, null, window.location.pathname);
  }
  window.scrollTo(0, 0);
});


// ----------------- Janela Menu -----------------

document.getElementById('menu-float').addEventListener('click', function() 
{
  const menuContent = document.getElementById('menu-list');

  if (menuContent.classList.contains('hidden')) {
    menuContent.classList.remove('hidden');
    menuContent.classList.add('flex');
  } else {
    menuContent.classList.remove('flex');
    menuContent.classList.add('hidden');
  }
}
);

// document.getElementById('menu-float').addEventListener('click', function()
// {
//   const menuContent = document.getElementById('menu-content');

//   if (menuContent.classList.contains('flex')) {
//     menuContent.classList.remove('flex');
//     menuContent.classList.add('flex-none');
//   } else {
//     menuContent.classList.remove('flex-none');
//     menuContent.classList.add('flex');
//   }
// }
// );
