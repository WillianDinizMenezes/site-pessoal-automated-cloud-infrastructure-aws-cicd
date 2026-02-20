document.addEventListener('DOMContentLoaded', () => {
    // 1. Progress Bar Update
    const progressContainer = document.createElement('div');
    progressContainer.id = 'progress-container';
    progressContainer.style = 'position:fixed; top:0; left:0; width:100%; height:4px; z-index:1000; background:rgba(255,153,0,0.1);';
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    progressBar.style = 'width:0%; height:100%; background:var(--color-primary); transition: width 0.1s;';
    progressContainer.appendChild(progressBar);
    document.body.appendChild(progressContainer);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
        
        // Header transparency on scroll
        const header = document.querySelector('.header');
        if (scrollTop > 50) {
            header.style.background = 'rgba(5, 5, 5, 0.9)';
            header.style.padding = '1.5rem var(--grid-gutter)';
        } else {
            header.style.background = 'var(--color-bg)';
            header.style.padding = '2rem var(--grid-gutter)';
        }
    });

    // 2. Fragment Reveal Animation
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .glass-card, .colossal-text').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Active Link Highlighting
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    console.log("AWS CORE BRUTALISM ENGINE INITIALIZED // _");
});
