// ============================================
// MOBILE MENU TOGGLE (Tailwind version)
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const mobileNav = document.getElementById('mobileNav');

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function () {
            mobileNav.classList.toggle('hidden');
            mobileNav.classList.toggle('flex');
        });

        // Close menu when a link inside it is clicked
        mobileNav.querySelectorAll('a').forEach(function (link) {
            link.addEventListener('click', function () {
                mobileNav.classList.add('hidden');
                mobileNav.classList.remove('flex');
            });
        });
    }
});