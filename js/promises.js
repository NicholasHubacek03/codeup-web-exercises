fetch("")
function getLastCommitDate(username) {
    const apiUrl = ``;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const lastCommitEvent = data.find(event => event.type === "PushEvent");
            const lastCommitDate = lastCommitEvent ? new Date(lastCommitEvent.created_at).toLocaleDateString() : null;
            return lastCommitDate;
        })
        .catch(error => console.error(error));
}

console.log(getLastCommitDate())

fetch('').then( response => {
    response.json().then( users => {
        users.forEach( userObj  => {
            // do something with the username login
            console.log(userObj.login);
        });
    });
});

