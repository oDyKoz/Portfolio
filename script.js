// Selecionar todos os itens do menu que têm submenus
const menuItems = document.querySelectorAll('#menu .menu-list li');

// Adicionar eventos de mouse para exibir/ocultar o submenu
menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'block';
    }
  });

  item.addEventListener('mouseleave', () => {
    const submenu = item.querySelector('.submenu');
    if (submenu) {
      submenu.style.display = 'none';
    }
  });
});
