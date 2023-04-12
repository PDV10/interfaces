let btn = document.querySelector(".btn");
btn.addEventListener("click", crearMatriz);

let table = document.querySelector(".table");

const MAX = 10;

function crearMatriz(){
    table.innerHTML = "";
    for (let i = 0; i < MAX; i++) {
        for (let j = 0; j < MAX; j++) {
            console.log(Math.random() * 100);
                       
        }       
    }
}