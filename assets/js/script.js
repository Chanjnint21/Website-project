(function() {
    document.getElementById("sidebarCollapse").addEventListener('click', (e) => {
        document.getElementById("sidebar").classList.toggle("active");
        document.getElementById("body").classList.toggle("active");
    });
})();
