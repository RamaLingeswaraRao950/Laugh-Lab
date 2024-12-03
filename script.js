const style = document.createElement('style');
style.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@200;400&display=swap');

  * {
    box-sizing: border-box;
  }

  body {
    background: #686de0;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 20px;
  }

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 800px;
  }

  h3 {
    margin: 0;
    opacity: 0.5;
    letter-spacing: 2px;
  }

  .joke {
    font-size: 30px;
    letter-spacing: 1px;
    line-height: 40px;
    margin: 50px auto;
    max-width: 600px;
  }

  .btn {
    background-color: blue;
    color: #fff;
    border: 0;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 14px 40px;
    font-size: 16px;
    cursor: pointer;
  }

  .btn:active {
    transform: scale(0.98);
  }

  .btn:focus {
    outline: 0;
  }
`;
document.head.appendChild(style);

document.body.innerHTML = `
  <div class="container">
    <h3>!!...Try Not To Laugh...!!</h3>
    <p class="joke" id="joke">Loading...</p>
    <button class="btn" id="jokeBtn">Make Me Laugh Again</button>
  </div>
`;

const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();

  jokeEl.innerHTML = data.joke;
}
