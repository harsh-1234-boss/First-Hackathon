document.addEventListener('DOMContentLoaded', function() {
    // Navbar active link highlighting
    const navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    const featureCards = document.querySelectorAll('.feature-card');
    const viewButtons = document.querySelectorAll('.view-button');

    featureCards.forEach(card => {

        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on the view button
            if (!e.target.classList.contains('view-button')) {
                const link = card.getAttribute('data-link');
                if (link) {
                    window.open(link, '_blank');
                }
            }
        });


        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });


    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click from triggering
            const card = this.closest('.feature-card');
            const link = card.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
    });
});