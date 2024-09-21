document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Ocultar todas las secciones
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        
        // Mostrar la sección correspondiente
        const tabId = this.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

document.getElementById('registroForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Registro exitoso. ¡Bienvenido!');
});

document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarme!');
});
