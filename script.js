// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });

        // Close menu when a link inside it is clicked
        mobileNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNav.classList.remove('open');
            });
        });
    }
});
