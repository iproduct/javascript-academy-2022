function init() {
    const resultsElem = document.getElementById("results")
    const result = fetch('/users.json')
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
            return new Promise((resolve, reject) => {
                setTimeout(reject, 5000, [img, gitUser]);
            });
        }).catch(([img, gitUser]) => {
            resultsElem.removeChild(img);
            console.log("Catching:", gitUser);
            return Promise.resolve(gitUser);
        }).then(
            gitUser => console.log("Final resolve:", gitUser),
            err => console.log("Final reject:", err)
        ).finally(() => console.log("Demo finished"))
        .then(() => console.log("After finish :)"));
}