const joke1 = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);
generateJoke();

async function generateJoke() {
    const jokeRes = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': "application/json"
          }
        });
        const jokeObj = await jokeRes.json();
        
        console.log(jokeObj);
        joke1.innerHTML = jokeObj.joke;
      }
      const touchButton = document.querySelector(".float-text");
      const card = document.querySelector(".float-card-info");
      const close = document.querySelector(".gg-close-r");

      touchButton.addEventListener("click", moveCard);
      close.addEventListener("click", moveCard);

function moveCard() {
  card.classList.toggle("active");
}