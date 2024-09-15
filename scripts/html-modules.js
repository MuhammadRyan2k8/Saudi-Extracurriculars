class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <header class="header">
            <div class="header-spacer"></div>

            
            <div class="header-left-section">
                <a href="index.html" ><img class="site-logo" src="pictures/logo.jpeg" alt="Site Logo"></a>
            </div>
            

            <div class="header-middle-section">
                <div class="header-middle-top">
                    <a href="index.html" class="site-title">Saudi Extracurriculars</a>
                </div>

                <nav>

                    <ul class="top-bar">
                        <li class="hide-on-mobile" > <a href="index.html" >Home</a> </li>
                        <li class="hide-on-mobile" > <a href="our-team.html" >Our Team</a> </li>
                        <li class="hide-on-mobile" > <a href="upcomming-events.html" >Upcomming Events</a> </li>
                        <li class="hide-on-mobile" > <a href="join-form.html" >Join</a> </li>
                        <li class="hide-on-pc" onclick=showSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a> </li>
                    </ul>
                    
                    <ul class="sidebar">
                        <li onclick=hideSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a> </li>
                        <li> <a href="index.html" >Home</a> </li>
                        <li> <a href="our-team.html" >Our Team</a> </li>
                        <li> <a href="upcomming-events.html" >Upcomming Events</a> </li>
                        <li> <a href="join-form.html" >Join</a> </li>
                    </ul>

                </nav>

            </div>

            <div class="header-spacer"></div>
        </header>
        `
    }
}

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <section class="footer">

            <img src="pictures/Banner.png" class="footer-banner">

            <div class="footer-1">
                <a href="https://tr.ee/Ol4rPd3TWC" > <img src="pictures/bl-instagram.jpeg"> </a>
                <a href="https://www.linkedin.com/company/saudi-extracurriculars-for-students/" > <img src="pictures/bl-linkedin.png"> </a>
                <a href="https://tr.ee/mq7EncQxxm" > <img src="pictures/bl-tiktok.jpg.jpg"> </a>
            </div>

            <div class="footer-2">
                <div class="footer-2-1">
                    Saudiextracurriculars@gmail.com
                </div>
                <div class="footer-2-1">
                    Join
                </div>
                <div class="footer-2-1">
                    Recent Events
                </div>
                <div class="footer-2-1">
                    Apply
                </div>
            </div>

            <a href="https://www.linkedin.com/in/muhammad-ryan1208" class="footer-3">
                This Website Was Made By Muhammad Ryan
            </a>

        </section>
        `
    }
}

customElements.define('my-footer', MyFooter)

customElements.define('my-header', MyHeader)