


function changeOpacity() {
  let answerSlot = document.querySelector("strong");
  answerSlot.classList.toggle("change-opacity");
 
}

function getTheAnswer(response) {
  let flashingText = document.querySelector("strong");
  flashingText.innerHTML = "";
  new Typewriter("p", {
    strings: `${response.data.answer}`,
    autoStart: true, delay:10, cursor:"",
  });
 
}

function handleSubmit(event) {
  event.preventDefault(); 
  let context = "please be brief and direct";
  let questionInput = document.querySelector(".input");

  let prompt = questionInput.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=b4b16ao0bed60a37cdt0a5dcdf865c3b`;
  axios.get(apiUrl).then(getTheAnswer);
}

let button = document.querySelector("form");
button.addEventListener("submit", handleSubmit);


setInterval(changeOpacity, 1000)