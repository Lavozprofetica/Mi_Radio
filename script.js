// Seleccionamos los elementos del menú
const menuIcon = document.querySelector('.menu-icon');
const menuList = document.querySelector('.menu-list');

// Función para mostrar u ocultar el menú al hacer clic en el icono
menuIcon.addEventListener('click', () => {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});

// Función para ocultar el menú al hacer clic en un enlace
menuList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuList.style.display = 'none';
    });   
});
