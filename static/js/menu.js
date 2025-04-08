document.addEventListener("DOMContentLoaded", function() {
    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("menu");

    mobileMenuButton.addEventListener("click", function() {
        menu.classList.toggle("show");
        mobileMenuButton.classList.toggle("open");
    });

    document.addEventListener("click", function(event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickInsideToggle = mobileMenuButton.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideToggle) {
            menu.classList.remove("show");
            mobileMenuButton.classList.remove("open");
        }
    });
});