document.addEventListener('DOMContentLoaded', () => {

    // ----------------------------------------
    // THEME TOGGLE LOGIC
    // ----------------------------------------

    const themeToggleBtn = document.getElementById('theme-toggle');

    if (themeToggleBtn) {

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
    }


    // ----------------------------------------
    // MOBILE MENU
    // ----------------------------------------

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('toggle');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-link').forEach(link => {

            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('toggle');
            });

        });
    }


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

                // Clear previous content
                modalBody.innerHTML = '';

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
                    img.alt = 'Certificate Preview';

                    modalBody.appendChild(img);
                }

                modal.style.display = 'flex';
            });
        });


        // Close modal button
        if (closeBtn) {

            closeBtn.addEventListener('click', () => {

                modal.style.display = 'none';
                modalBody.innerHTML = '';

            });
        }


        // Close modal when clicking outside
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
    // Formspree handles the submission.
    // DO NOT use preventDefault() here.
    //
    // The HTML form should contain:
    //
    // action="https://formspree.io/f/mbglrlnr"
    // method="POST"
    //
    // ----------------------------------------

});