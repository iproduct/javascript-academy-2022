import { Post } from "./post-model.js";

window.addEventListener('load', init);

const BASE_API_URL = 'http://localhost:3000/api/';

async function init() {
    const form = document.getElementById('new-post-form');
    form.addEventListener('submit', onSubmit);
    fetchPosts()
}

function onSubmit(event) {
    event.preventDefault();
    // const form = document.getElementById('new-post-form');
    const fd = new FormData(event.target);
    const post = new Post(fd.get('title'), fd.get('content'), fd.get('tags').split(",").map(tag => tag.trim()));
    console.log(post);
}


async function fetchPosts() {
    const resultsElement = document.getElementById('results');
    resultsElement.innerHTML='';
    const resp = await fetch(BASE_API_URL + 'posts');
    const posts = await resp.json();
    console.log(posts);
    posts.map(post => createArticleElement(post))
        .forEach(postElem => {
            resultsElement.appendChild(postElem);
        });
}

function createArticleElement(post) {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    h2.textContent = post.title;
    article.appendChild(h2)
    const content = document.createElement('div');
    content.textContent = post.content;
    article.appendChild(content)
    const tags = document.createElement('div');
    tags.textContent = post.tags.join(', ');
    article.appendChild(tags)
    return article;
}