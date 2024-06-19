document.addEventListener("DOMContentLoaded", function() {
    // Funcionalidad del menú hamburguesa
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('#nav-menu').classList.toggle('show');
    });
    function toggleMenu() {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('show');
    }
    
    document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu);
    // Funcionalidad para los iconos del menú hamburguesa
    document.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            document.querySelector('#nav-menu').classList.remove('show');
        });
    });

    // Funcionalidad para los videos en la página index.html
    window.addEventListener('resize', function() {
        if (window.innerWidth < 768) {
            document.querySelectorAll('.video-clip').forEach(function(video) {
                video.style.width = '100%';
            });
        } else {
            document.querySelectorAll('.video-clip').forEach(function(video, index) {
                if ((index + 1) % 3 === 0) {
                    video.style.marginRight = '0';
                } else {
                    video.style.marginRight = '20px';
                }
                video.style.width = 'calc(33.333% - 20px)';
            });
        }
    });

    // Funcionalidad para centrar el contenido
    document.querySelectorAll('section').forEach(function(section) {
        section.style.textAlign = 'center';
    });

    // Funcionalidad para cambiar el estilo de las letras
    document.body.style.fontFamily = 'Helvetica, sans-serif';

    // Funcionalidad para los iconos de redes sociales en el footer
    document.querySelectorAll('.social-media a').forEach(function(icon) {
        icon.style.fontSize = '24px';
        icon.style.margin = '0 10px';
    });

    // Funcionalidad para el formulario de contacto con Formspree
    var contactForm = document.getElementById("contactForm");
    var statusMessage = document.getElementById("statusMessage");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que se envíe el formulario de forma predeterminada

        var formData = new FormData(contactForm);
        var xhr = new XMLHttpRequest();

        xhr.open("POST", contactForm.action);
        xhr.setRequestHeader("Accept", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;

            if (xhr.status === 200) {
                statusMessage.innerHTML = "Mensaje enviado correctamente. ¡Gracias!";
                contactForm.reset(); // Reinicia el formulario
            } else {
                statusMessage.innerHTML = "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.";
            }
        };

        xhr.send(formData);
    });
});
