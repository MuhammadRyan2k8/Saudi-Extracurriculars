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

    let articleText = `<br>Upcoming generations are the future of our world, the focus of our goals, and the main source of success going forward. It is transparent that Saudi Arabia has put its youngsters as a priority in their vision of 2030 by providing them with the best opportunities that help build and shape their characters, and through SEFS students will be able to access these opportunities a lot easier.
    <br><br>The easy accessibility of these opportunities, as well as providing new opportunities not seen before, aligns SEFS goals along with Saudi Arabia’s to set the building blocks of strong, independent youth that will be able to lead onward. It is our goal to empower and develop young people to be the best versions of themselves. 
    <br><br>Not only are we dedicating this organization to provide help; we are planning to make an impact that lasts till the youngsters are not young anymore and are one of the greatest people that will be known in the future. 
    <br><br>Everyone should have a vision of who they would like to become as they grow older. SEFS will hand them the helping hand they need into making their dreams come true, allowing a brighter sight that their hopes can turn into reality.
    <br><br>To conclude, SEFS believes that youth are the future of our world and play a crucial part in the vision of Saudi Arabia; therefore, we would like to lend a hand by providing the youngsters an accessible way of providing opportunities to help them them build and become the best versions of them selves that they could be for the rest of their lives.`

    navigateToArticle(articleTitle, articleText)
}