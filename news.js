// https://newsapi.org/v2/everything?q=tesla&from=2022-05-04&sortBy=publishedAt&apiKey=6647341cc78c48cc9c62fd5307b7ccfc
// https://newsapi.org/v2/top-headlines/sources?apiKey=API_KEY
let apiKey = "6647341cc78c48cc9c62fd5307b7ccfc";
let source = "the-hindu";



const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function (){
    if (this.status === 200) {

        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let article = obj.articles;
        console.log(article);
        let container = document.getElementById('container');
        let newsHtml = "";
   
        article.forEach(function (element,index) {
            newsHtml += `<div class="accordion-item" id="News${index+1}">
                                <a href="#News${index+1}" class="accordion-link">${element.title}</a>
                                <div class="answer"><p>${element.content}. <a href="${element['url']}" target="_blank" >Read more here</a></p></div>
                         </div>`
                    
        });
        container.innerHTML = newsHtml;

    }
    else {
        console.log("Some error occured")
    }
} 

xhr.send();