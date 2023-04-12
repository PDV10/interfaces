const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const x = 100;
const y = 100;
const size = 200;

const gradient = ctx.createLinearGradient(x,y,x,y + size);

gradient.addColorStop(0, "rgb(0,0,0)");
gradient.addColorStop(1, "rgb(255,255,255)");

ctx.fillStyle = gradient;
ctx.fillRect(x,y,size,size) // primeros 2 parametros son las coordenadas donde se empieza a dibujar el contexto, los segundos parametros definen el tamaño