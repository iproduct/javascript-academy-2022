import { Post } from "./post-model.js";

window.addEventListener('load', init);

const BASE_API_URL = 'http://localhost:3000/api';
const resultsElement = document.getElementById('results');
const messagesElement = document.getElementById('messages');
const errorsElement = document.getElementById('errors');

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
    postNewPost(post);
}

async function postNewPost(post) {
    const resp = await fetch(BASE_API_URL + '/posts',{
        headers:{
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(post)
    });
    const created = await resp.json();
    const postElem = createArticleElement(created);
    resultsElement.appendChild(postElem);
    messagesElement.textContent  = '';
    errorsElement.textContent  = '';
}

async function deletePost(postId) {
    const resp = await fetch(`${BASE_API_URL}/posts/${postId}`, {
        method: 'DELETE',
    });
    const deleted = await resp.json();
    errorsElement.textContent  = '';
    messagesElement.textContent  = `Successfully deleted post with ID='${postId}'.`;
    fetchPosts();
}

async function fetchPosts() {
    resultsElement.innerHTML='';
    const resp = await fetch(BASE_API_URL + '/posts');
    const posts = await resp.json();
    console.log(posts);
    posts.map(post => createArticleElement(post))
        .forEach(postElem => {
            resultsElement.appendChild(postElem);
        });
    errorsElement.textContent  += '';
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

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    btnDelete.addEventListener('click', () => deletePost(post.id))
    article.appendChild(btnDelete)

    return article;
}