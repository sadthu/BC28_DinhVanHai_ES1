let arrColor = ['pallet','viridian','pewter','cerulean','vermillion','lavender','celadon','saffron','fuschia','cinnabar'];
let arrBtn = '';
let renderButton = () => {
    let html = '';
    for (let i = 0; i < arrColor.length; i++) {
        let color = arrColor[i];
        html += `
            <button class="color-button ${color}" onclick="changeColor('${color}')"></button>
        `
    }
    document.querySelector('#colorContainer').innerHTML = html;
}

let changeColor = (color) => {
    let btn = document.querySelector(`.color-controls #colorContainer .${color}`)
    console.log(btn)
    $('button').removeClass('active');
    $(btn).addClass('active');
    document.querySelector('#house').className = 'house ' + color;
}

window.onload = function () {
    renderButton();
    arrBtn = document.querySelectorAll('#colorContainer button');
    arrBtn[0].classList.add('active');
}
