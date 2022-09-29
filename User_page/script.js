const menuIconButton = document.querySelector("[data-menu-btn]")
const sidebar = document.querySelector("[data-sidebar]")

menuIconButton.addEventListener("click", () => {
  sidebar.classList.toggle("open")
})