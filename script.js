const button = document.getElementById('btn');

const randomcolor = () => {
    let val = '0123456789ABCDEF';
    let con = '#';
    for(let i = 0 ; i < 6 ; i++) {
        con = con + val[Math.floor(Math.random() * 16)];
    }
    return con;
}
console.log(randomcolor);
function changerandomcolor () {
    document.body.style.backgroundColor = randomcolor();
}
button.addEventListener('click',changerandomcolor);