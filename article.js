class ArticleTitle extends HTMLElement {
    connectedCallback() {
        const storedTitle = localStorage.getItem('articleTitle');
        this.innerHTML = storedTitle ? storedTitle : 'Default Article Title';
    }
}

class ArticleText extends HTMLElement {
    connectedCallback() {
        const storedText = localStorage.getItem('articleText');
        this.innerHTML = storedText ? storedText : 'Default Article Text';
    }
}

customElements.define('article-text', ArticleText);

customElements.define('article-title', ArticleTitle);


function navigateToArticle(articleTitle, articleText) {
    localStorage.setItem('articleTitle', articleTitle);
    localStorage.setItem('articleText', articleText);
    window.location.href = 'article.html';
}

function Article1()
{
    let articleTitle = `We Help Build Our Youth`

    let articleText = 
    `<br><br>Upcoming generations are the future of our world, the focus of our goals, and the main source of success going forward. It is transparent that Saudi Arabia has put its youngsters as a priority in their vision of 2030 by providing them with the best opportunities that help build and shape their characters, and through SEFS students will be able to access these opportunities a lot easier.
    <br><br>The easy accessibility of these opportunities, as well as providing new opportunities not seen before, aligns SEFS goals along with Saudi Arabia’s to set the building blocks of strong, independent youth that will be able to lead onward. It is our goal to empower and develop young people to be the best versions of themselves. 
    <br><br>Not only are we dedicating this organization to provide help; we are planning to make an impact that lasts till the youngsters are not young anymore and are one of the greatest people that will be known in the future. 
    <br><br>Everyone should have a vision of who they would like to become as they grow older. SEFS will hand them the helping hand they need into making their dreams come true, allowing a brighter sight that their hopes can turn into reality.
    <br><br>To conclude, SEFS believes that youth are the future of our world and play a crucial part in the vision of Saudi Arabia; therefore, we would like to lend a hand by providing the youngsters an accessible way of providing opportunities to help them them build and become the best versions of them selves that they could be for the rest of their lives.
    `
    navigateToArticle(articleTitle, articleText)
}

function Article2()
{
    let articleTitle = `Learn About Volunteering Opportunities`

    let articleText = 
    `<br><br>Have you ever looked for volunteering opportunities but don’t know where to start? Or found them yet didn’t have time to sign up? Then you have found the right place to overcome both of these problems.
    <br><br>Many students are in need to volunteer to either complete a certain amount of volunteering hours before graduating, or having these volunteering hours as an extracurricular to apply for colleges nationally and world wide. 
    <br><br>A specialty of SEFS is giving students the volunteering opportunities at an earlier period so they can sign up on time, provide a brief explanation on what is needed from them, and shares them in the most accessible way possible. 
    <br><br>It is ensured that these volunteering opportunities are official and rewards the students with a certificate or certain amount of hours on the government platform. This way, the students do not have to worry about the possibility of it being a scam.
    <br><br>To summarise, it is one of SEFS expertise to share volunteering opportunities on time, including information about it, and with easy reachability that are valid and official for those students in need of the volunteering hours.
    `
    navigateToArticle(articleTitle, articleText)
}

function Article3()
{
    let articleTitle = `Becoming a global citizen`

    let articleText = 
    `<br><br>In this interconnected world, most students recognize the significance that everyone is a part of a large community; involving the embracement of our responsibility towards the world and humanity. This is one reason that students tend to make organizations such as SEFS.
    <br><br>Encouraging students to be open-minded about the different environments, perspectives, and experiences is one of SEFS main priorities. It is a way to connect and solidate everyone to create a safe community for students.
    <br><br>It is not only about raising awareness but also about taking action in trying to make this world a better place. We give insight on the path that can be taken to contribute to the global community in meaningful ways and making more sustainable lifestyle choices.
    <br><br>Global issues are taken to understand the critical role of everyone in the world and see what can be offered to solve these issues and create a peaceful community for everyone and themselves. 
    <br><br>As a result, it is important to acknowledge the different roles that can be taken to act and develop solution to global issues and form an upgraded environment that unites everyone that have the same beliefs. 
    `
    navigateToArticle(articleTitle, articleText)
}