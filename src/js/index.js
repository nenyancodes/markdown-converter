import "../scss/main.scss";
import MarkdownIt from "markdown-it";

const markdownIt = new MarkdownIt();

console.log("HELLO 🚀");

const textarea = document.querySelector(".markdown__textarea");
const converted = document.querySelector(".converted");
const saveButton = document.querySelector(".markdown__button-save");
const clearButton = document.querySelector(".markdown__button-clear");
const loadButton = document.querySelector(".markdown__button-load");

const initializeTextarea = () => {
  const entry = localStorage.getItem("plainText");
  const result = entry ? entry : "";
  textarea.value = result;
  localStorage.setItem("plainText", result);
  renderMarkdown();
};

const renderMarkdown = () => {
  let text = localStorage.getItem("plainText");
  let textConverted = text ? markdownIt.render(text) : "";
  converted.innerHTML = `<div>${textConverted}</div>`;
};

saveButton.addEventListener("click", () => {
  localStorage.setItem("plainText", textarea.value);
  renderMarkdown();
});

clearButton.addEventListener("click", () => {
  textarea.value = "";
  localStorage.setItem("plainText", textarea.value);
  renderMarkdown();
});

loadButton.addEventListener("click", () => {
  textarea.value = localStorage.getItem("plainText");
  renderMarkdown();
});

initializeTextarea();
