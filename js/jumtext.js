let content = document.querySelector('.heading').innerHTML;
let arrText = [...content];
let html = '';
for (let i = 0; i < arrText.length; i++) {
    html += `<span>${arrText[i]}</span>`
}
document.querySelector('.heading').innerHTML = html