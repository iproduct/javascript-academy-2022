async function processRequest() {
    const resultsElem = document.getElementById("results")
    const result = await fetch('/users.json')
    const users = await result.json();
    resultsElem.innerHTML = JSON.stringify(users);
    const gitUsers = await Promise.all(
        users.map(async(user) => {
            const resp = await fetch(`https://api.github.com/users/${user.username}`);
            const gitUser = await resp.json();
            console.log(gitUser);
            return gitUser;
        })
    );

    const images = gitUsers.map(gitUser => {
        const img = new Image();
        img.src = gitUser.avatar_url;
        resultsElem.appendChild(img);
        return img;
    })

    await new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, "Error: Rejected from processRequest");
    });
    images.forEach(img => resultsElem.removeChild(img))
    return gitUsers;
}

function init() {
    processRequest()
        .then(gitUsers => console.log("Final resolve:", gitUsers))
        .catch(err => console.log("Final reject:", err))
        .finally(() => console.log("Demo finished"));
}