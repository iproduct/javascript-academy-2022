function init() {
    const resultsElem = document.getElementById("results")
    fetch('/users.json')
    .then(resp => resp.json())
    .then(users => {
        resultsElem.innerHTML = JSON.stringify(users);
        return fetch(`https://api.github.com/users/${users[0].username}`)
    }).then(resp => resp.json())
    .then(gitUser => {
        console.log(gitUser);
        // const img = new Image();
        const img = document.createElement('img');
        img.src = gitUser.avatar_url;
        resultsElem.appendChild(img);
        return gitUser;
    })

}