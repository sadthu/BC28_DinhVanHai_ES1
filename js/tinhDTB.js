
let tinhDTB = (...thamSo) => {
    let tong = 0;
    switch (thamSo.length) {
        case 3 : {
            tong = (thamSo[0] + thamSo[1] + thamSo[2]) / 3;
        } break;
        case 4: {
            tong = (thamSo[0] + thamSo[1] + thamSo[2] + thamSo[3]) / 4;
        };break;
        default : {
            console.log('Tham số không hợp lệ');
        }
    }
    return tong;
}


document.querySelector('#btnKhoi1').onclick = function () {
    let arrInput = document.querySelectorAll('.row .area_1 input');
    document.querySelector('#tbKhoi1').innerHTML = tinhDTB(+arrInput[0].value, +arrInput[1].value, +arrInput[2].value).toFixed(2);
}

document.querySelector('#btnKhoi2').onclick = function () {
    let arrInput = document.querySelectorAll('.row .area_2 input');
    document.querySelector('#tbKhoi2').innerHTML = tinhDTB(+arrInput[0].value, +arrInput[1].value, +arrInput[2].value, +arrInput[2].value).toFixed(2)
}