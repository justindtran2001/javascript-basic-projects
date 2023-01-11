
const closeSidebarBtn = document.querySelector('.close-btn');
const toggleSidebarBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar')

closeSidebarBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});

toggleSidebarBtn.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});