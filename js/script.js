document.addEventListener('DOMContentLoaded', () => {
    const projectContainer = document.getElementById('project-container');

    // --- LISTA DE PROYECTOS ---
        const projects = [
        {
            title: 'Mitsubishi Landing Page',
            description: 'Landing page básica para Mitsubishi.',
            imageUrl: '/projects/Landing_mitsubishi/img/thumbnail.jpg', // Ruta a la imagen del proyecto
            liveUrl: './projects/Landing_mitsubishi/index.html', // Enlace a la demo en vivo
            repoUrl: 'https://github.com/Gaboromay/web-test/tree/main/projects/Landing_mitsubishi'  // Enlace al repositorio de código
        },
        {
            title: 'Golfeados de antaño',
            description: 'Pagina web de la tienda "Golfeados de antaño".',
            imageUrl: './assets/images/thumbnail-golfeados.png',
            liveUrl: 'https://golfeados-antano.vercel.app/',
            repoUrl: 'https://github.com/Gaboromay/golfeados_antano.git'
        },
        {
            title: 'Proyecto Gamma',
            description: 'Descripción del tercer proyecto.',
            imageUrl: '#',
            liveUrl: '#',
            repoUrl: '#'
        },
    ];

    // --- FUNCIÓN PARA MOSTRAR LOS PROYECTOS ---
    function displayProjects() {
        projectContainer.innerHTML = ''; // Limpiar el contenedor
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';

            projectCard.innerHTML = `
                <div class="project-card-inner">
                    <img src="${project.imageUrl}" alt="Imagen del proyecto ${project.title}">
                    <div class="project-card-content">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <div class="links">
                            <a href="${project.liveUrl}" target="_blank">Ver Demo</a>
                            <a href="${project.repoUrl}" target="_blank">Ver Código</a>
                        </div>
                    </div>
                </div>
            `;
            projectContainer.appendChild(projectCard);
        });
    }

    // Cargar los proyectos al iniciar la página
    displayProjects();

    // --- LÓGICA DEL MODO OSCURO ---
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    // Función para activar el modo oscuro
    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.textContent = 'Modo Claro';
    };

    // Función para desactivar el modo oscuro
    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        darkModeToggle.textContent = 'Modo Oscuro';
    };

    // Comprobar la preferencia del usuario al cargar la página
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    // Event listener para el botón
    darkModeToggle.addEventListener('click', () => {
        body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
    });

});
