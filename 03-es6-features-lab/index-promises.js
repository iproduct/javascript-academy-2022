function init() {
    var resultsDiv = document.getElementById("results")
    fetch("/users.json")
        .then(resp => resp.json())
        .then(usersArr => {
            console.log(usersArr);
            return Promise.all(
                usersArr.map(user => fetch(`https://api.github.com/users/${user.name}`)
                    .then(gitResponse => gitResponse.json())
                )
            )
        })
        .then(gitUsers => {
            console.log(gitUsers);
            return gitUsers.map(gitUser => {
                var img = document.createElement("img")
                resultsDiv.appendChild(img);
                img.src = gitUser.avatar_url;
                return img;
            });
        }).then(images => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    images.forEach(img => {
                        img.remove();
                    });
                    resolve('Demo finished.');
                }, 10000);
            });
        }).then(result => {
            console.log(result);
        })
}