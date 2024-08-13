class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `
        <header class="header">
            <div class="header-spacer"></div>

            
            <div class="header-left-section">
                <img class="site-logo" src="pictures/logo.jpeg" alt="Site Logo">
            </div>
            

            <div class="header-middle-section">
                <div class="header-middle-top">
                    <p class="site-title">Saudi Extracurriculars</p>
                </div>

                <nav>

                    <ul class="top-bar">
                        <li class="hide-on-mobile" > <a href="#" >Academics</a> </li>
                        <li class="hide-on-mobile" > <a href="#" >Admission</a> </li>
                        <li class="hide-on-mobile" > <a href="#" >Research</a> </li>
                        <li class="hide-on-mobile" > <a href="#" >Athletics</a> </li>
                        <li class="hide-on-mobile" > <a href="#" >Alumni</a> </li>
                        <li class="hide-on-mobile" > <a href="#" >Giving</a> </li>
                        <li class="hide-on-pc" onclick=showSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></a> </li>
                    </ul>
                    
                    <ul class="sidebar">
                        <li onclick=hideSidebar() > <a href="#" ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a> </li>
                        <li> <a href="#" >Academics</a> </li>
                        <li> <a href="#" >Admission</a> </li>
                        <li> <a href="#" >Research</a> </li>
                        <li> <a href="#" >Athletics</a> </li>
                        <li> <a href="#" >Alumni</a> </li>
                        <li> <a href="#" >Giving</a> </li>
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
        
        `
    }
}

customElements.define('my-footer', MyFooter)

customElements.define('my-header', MyHeader)