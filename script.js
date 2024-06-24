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

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const messageSent = document.getElementById('messageSent');
    const messageError = document.getElementById('messageError');

    form.addEventListener('submit', async function (e) {
        e.preventDefault();  // Previene la acción por defecto del formulario
        
        const formData = new FormData(form);
        const action = form.action;
        
        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                form.reset();
                messageSent.style.display = 'block';
                messageError.style.display = 'none';
            } else {
                throw new Error('Error en el envío del formulario');
            }
        } catch (error) {
            messageError.style.display = 'block';
            messageSent.style.display = 'none';
        }
    });
});
