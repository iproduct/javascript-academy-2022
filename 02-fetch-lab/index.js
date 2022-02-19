function init() {
    var resultsDiv = document.getElementById("results")
    fetch("/users.json")
    .then(resp => resp.json())
    .then(userObj => {
        console.log(userObj)
        return fetch(`https://api.github.com/users/${userObj.name}`);
    }).then(gitResponse => gitResponse.json())
    .then(gitUser => {
        console.log(gitUser);
        var img = document.createElement("img")
        resultsDiv.appendChild(img);
        img.src = gitUser.avatar_url
        return gitUser;
    })
}