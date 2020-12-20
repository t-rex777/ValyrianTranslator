var inputText = document.querySelector(".inputText");
var handleBtn = document.querySelector(".btn");
var outputText = document.querySelector("#translatedText");

var serverUrl = "https://api.funtranslations.com/translate/valyrian.json?";

const translateMinion = (input) => {
  return fetch(serverUrl + "text=" + input)
    .then((response) => response.json())
    .then((data) => {
      outputText.innerText = data.contents.translated;
    })
  .catch(err=>console.log(err));
};

handleBtn.addEventListener("click", () => {
  var userInput = inputText.value;
  translateMinion(userInput);
});
