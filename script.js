// JavaScript to switch between sections and add active class to the clicked nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all links
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        
        // Add active class to the clicked link
        e.target.classList.add('active');

        const target = e.target.dataset.target;

        // Hide all pages and show the target page
        document.querySelectorAll('.page').forEach(page => {
            page.classList.add('hidden');
        });

        document.getElementById(target).classList.remove('hidden');
    });
});

// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollToTopButton.classList.remove('hidden');
    } else {
        scrollToTopButton.classList.add('hidden');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


