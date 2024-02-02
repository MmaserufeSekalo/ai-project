


function changeOpacity() {
  let answerSlot = document.querySelector("p");
  answerSlot.classList.toggle("change-opacity");
  console.log(1);
}

function getTheAnswer(response) {
  let flashingText = document.querySelector("strong");
  flashingText.innerHTML = "";
  new Typewriter("p", {
    strings: `${response.data.answer}`,
    autoStart: true,
  });
  console.log("are bone");
}

function handleSubmit(event) {
  event.preventDefault(); // Corrected spelling
  let context = "please be brief and direct";
  let questionInput = document.querySelector(".input");
  let prompt = questionInput.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=b4b16ao0bed60a37cdt0a5dcdf865c3b`;
  axios.get(apiUrl).then(getTheAnswer);
}

let button = document.querySelector("form");
button.addEventListener("submit", handleSubmit);


//setInterval(changeOpacity, 1000)