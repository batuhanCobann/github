document.getElementById("mode-btn").addEventListener("click", () => { 
    document.body.classList.toggle("dark");
    localStorage.setItem("mode", document.body.classList);
});

if (localStorage.getItem("mode") != ""){
    document.body.classList.add(localStorage.getItem("mode"));
}


const digitalCard = document.querySelector(".conteiner-body")


async function card(){
    const card = await fetch("https://api.github.com/users/orhanekici ");
    const data =  await card.json();
    return [data];    
  
}


async function getCard(){
    const data = await card();
    for (const user of data) {
        digitalCard.innerHTML += ` 
        <div class="ana-body">
            <div class="body-conteiner">
                <img class="avatar" src="${user.avatar_url}" alt="">
                <div class="body-text">
                    <h1>${user.name}</h1>
                    <a href="https://github.com/orhanekici" target="_blank">@orhanekici</a>
                    <p>This profile has no bio</p>
                </div>
                <div class="date">
                    <p>Joined 12 Fab 2014</p>
                </div>
            </div>
            <div class="mini-body">
                <div class="repos">
                    <p>Repos</p>
                    <h2>${user.public_repos}</h2>
                    
                </div>
                <div class="followers">
                    <p>Followers</p>
                    <h2>${user.followers}</h2>
                </div>
                <div class="following">
                    <p>Following</p>
                    <h2>${user.following}</h2>
                </div>
            </div>


            <div class="social-media">
                <div class="social-media1">
                    <p><img src="assets/img/location.svg">${user.location}</p>
                    <p><img src="assets/img/002-url.svg">No Blog</p>
                </div>
                <div class="social-media2">
                    <p><img src="assets/img/twitter.svg">Not Available</p>
                    <p><img src="assets/img/001-office-building.svg">${user.company}</p>
                </div>
            </div>

        </div>
        
        `
    }
}

getCard();