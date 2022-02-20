async function init() {
    try {
        var resultsDiv = document.getElementById("results");
        const resp = await fetch("http://localhost:3000/users");
        const usersArr = await resp.json();
        console.log(usersArr);
        const gitUsers = await Promise.all(
            usersArr.map(async user => {
                const gitResponse = await fetch(`https://api.github.com/users/${user.name}`)
                return gitResponse.json()
            })
        );
        console.log(gitUsers);
        const images = gitUsers.map(gitUser => {
            var img = document.createElement("img")
            resultsDiv.appendChild(img);
            img.src = gitUser.avatar_url;
            return img;
        });
        const result = await new Promise((resolve, reject) => {
            setTimeout(() => {
                images.forEach(img => {
                    img.remove();
                });
                resolve('Demo finished.');
            }, 10000);
        });
        console.log(result);
    } catch (err) {
        console.log(`Error: ${err}`)
    }
}