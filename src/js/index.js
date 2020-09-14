import "../scss/main.scss";
import MarkdownIt from "markdown-it";

const markdownIt = new MarkdownIt();

console.log("HELLO 🚀");

localStorage.setItem("entry", "");

let result = "";
const entry = localStorage.getItem("entry");

if (entry) {
  result = entry;
}

const textarea = document.querySelector(".markdown__textarea");
textarea.value = result;

const converted = document.querySelector(".converted");

const renderMarkdown = () => {
  console.log("render");

  let text = localStorage.getItem("entry");
  console.log(text);
  let textConverted = markdownIt.render(text);
  converted.innerHTML = `<div>${textConverted}</div>`;
  console.log(textConverted);
};

const saveButton = document.querySelector(".markdown__button-save");
saveButton.addEventListener("click", () => {
  localStorage.setItem("entry", textarea.value);
  renderMarkdown();
});

const clearButton = document.querySelector(".markdown__button-clear");
clearButton.addEventListener("click", () => {
  textarea.value = "";
  localStorage.setItem("entry", textarea.value);
  renderMarkdown();
});

const loadButton = document.querySelector(".markdown__button-load");
loadButton.addEventListener("click", () => {
  textarea.value = localStorage.getItem("entry");
  renderMarkdown();
});
