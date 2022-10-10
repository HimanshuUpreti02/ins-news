const container = document.getElementById('news-container');

const apiUrl = 'https://raw.githubusercontent.com/Saransh-Tiwari-2002/inshorts_json/main/inshorts.json';
let newsFromApi = [];

function displayNews(){
    for (let news of Object.entries(newsFromApi)) {

        const div = document.createElement("div");
        div.classList.add("image-div");
        
        const img = document.createElement("img");
        img.setAttribute("src" , news[1].image);
        img.setAttribute("title", news[1].title);
        
        const url = document.createElement("a");
        url.setAttribute("href" , news[1].url);
        url.setAttribute("target", "_blank")

        const article_body = document.createElement("h4");
        article_body.textContent = news[1].article_body.slice(0,75)+"...";

        const author_name = document.createElement("h3");
        author_name.innerHTML = news[1].author_name;


        const time_date = document.createElement("p");
        time_date.textContent = news[1].article_date + "  " +news[1].article_time ;
        
        div.appendChild(img);
        div.appendChild(url);
        url.appendChild(article_body);
        div.appendChild(author_name);
        div.appendChild(time_date);
        container.appendChild(div);
    }
}


async function GetNewsFromApi() {
    try {
        const response = await fetch(apiUrl);
        newsFromApi  = await response.json();
        displayNews();
    } catch (error) {
        console.log(error);
    }
}

GetNewsFromApi();