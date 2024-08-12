document.addEventListener('DOMContentLoaded', function () {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', function () {
        parallaxElements.forEach(element => {
            let scrolled = window.scrollY;
            let rate = scrolled * 0.4; // Adjust rate as needed

            element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
        });
    });
});

function showSidebar()
{
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}
function hideSidebar()
{
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}