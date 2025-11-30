document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------
    // THEME TOGGLE LOGIC
    // ----------------------------------------
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('span');

    // Check localStorage for theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.textContent = '☀️';
    }

    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeIcon.textContent = '☀️';
        } else {
            themeIcon.textContent = '🌙';
        }
        localStorage.setItem('theme', theme);
    });

    // ----------------------------------------
    // MOBILE MENU
    // ----------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        navLinks.classList.remove('active');
    }));

    // ----------------------------------------
    // CERTIFICATE MODAL PREVIEW
    // ----------------------------------------
    const modal = document.getElementById('cert-modal');
    if (modal) {
        const modalBody = document.getElementById('modal-body');
        const closeBtn = document.querySelector('.close-modal');
        const previewBtns = document.querySelectorAll('.preview-btn');

        previewBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const file = btn.getAttribute('data-file');
                const type = btn.getAttribute('data-type');
                
                modalBody.innerHTML = ''; // Clear previous content

                if (type === 'pdf') {
                    // Embed PDF
                    const embed = document.createElement('embed');
                    embed.src = file;
                    embed.type = 'application/pdf';
                    embed.width = '100%';
                    embed.height = '100%';
                    modalBody.appendChild(embed);
                } else {
                    // Show Image
                    const img = document.createElement('img');
                    img.src = file;
                    modalBody.appendChild(img);
                }
                
                modal.style.display = 'flex';
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            modalBody.innerHTML = ''; // Stop PDF from playing/rendering in bg
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                modalBody.innerHTML = '';
            }
        });
    }

    // ----------------------------------------
    // CONTACT FORM
    // ----------------------------------------
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // In a real app, you would send data to a backend here.
            alert('Form submitted successfully! (UI Only)');
            contactForm.reset();
        });
    }
});