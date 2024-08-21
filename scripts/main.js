function showSidebar()
{
    const sidebar = document.querySelector(".sidebar")
    const topbar = document.querySelector(".top-bar")
    sidebar.style.display = 'flex'
    topbar.style.display = 'none'
}
function hideSidebar()
{
    const sidebar = document.querySelector(".sidebar")
    const topbar = document.querySelector(".top-bar")
    sidebar.style.display = 'none'
    topbar.style.display = 'flex'
}