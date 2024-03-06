

const jokes = document.getElementById("jokes");
const btn = document.getElementById("btn");
const jokeApi = async() => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist&type=single');
    const data = await response.json();
    jokes.textContent = `${data.joke}`;

}

btn.addEventListener("click", () => {
    jokeApi();
});



// jokeApi();