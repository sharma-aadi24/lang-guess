










































import './style.css';
import { guessLanguage } from './guess.js';
 
const input = document.getElementById('text');
const result = document.getElementById('result');
 
function showHint(message) {
  result.innerHTML = `<p class="hint">${message}</p>`;
}
 
function render() {
  const res = guessLanguage(input.value);
 
  if (res.status === 'short') {
    return showHint('Type at least 10 characters. Longer text gives a better guess.');
  }
  if (res.status === 'unknown') {
    return showHint("Couldn't identify this language. Try a longer or cleaner sample.");
  }
 
  const { best, all } = res;
  const nativeHtml =
    best.native && best.native !== best.name ? `<p class="native">${best.native}</p>` : '';
 
  const barsHtml = all
    .map(
      (l) => `
      <li>
        <span>${l.name}</span>
        <div class="bar"><i style="width:${Math.round(l.score * 100)}%"></i></div>
      </li>`
    )
    .join('');
 
  result.innerHTML = `
    <h2 class="answer">${best.name}</h2>
    ${nativeHtml}
    <ul class="others">${barsHtml}</ul>`;
}
 
let timer;
input.addEventListener('input', () => {
  clearTimeout(timer);
  timer = setTimeout(render, 250);
});
 
