const outerUl = document.querySelector(".repos");

function fetchUser(username) {
    fetch(`https://api.github.com/search/repositories?q=user:${username}`)
        .then(response => response.json())
        .then(repositories => render(username, repositories))
};

function render(username, repositories) {
    const outerLi = document.createElement("li");
    outerLi.innerHTML = `${username}'s Repositories:`;
    outerUl.appendChild(outerLi);
    repositories.items.forEach(data => {
        const innerUl = document.createElement("ul");
        const innerLi = document.createElement("li");
        innerLi.classList.add("list");
        innerLi.innerHTML = `${data.name}: ${data.html_url}`;
        innerUl.appendChild(innerLi);
        outerLi.appendChild(innerUl);
    });
}

const classMate1 = fetchUser("Saidemm");
const classMate2 = fetchUser("Gohar33");
const classMate3 = fetchUser("SlaviaF");
// const classMate4 = fetchUser("islam-fawzy25");
// const classMate5 = fetchUser("shpomp");
// const classMate6 = fetchUser("NatsGt");
// const classMate7 = fetchUser("dinythomas89");
// const classMate8 = fetchUser("seenachacko");
// const classMate9 = fetchUser("Bhuvaneshwari29");
// const classMate10 = fetchUser("mahakarzoun");
// const classMate11 = fetchUser("DarinkaGM");
// const classMate13 = fetchUser("adnan832");
// const classMate14 = fetchUser("shanhaider23");
// const classMate15 = fetchUser("WENCHO22");
// const classMate16 = fetchUser("Hani-far");

Promise.all([classMate1, classMate2, classMate3])
    .catch(error => console.log(`Error in promises ${error}`));