const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const file_inp = document.getElementById('file_inp');

file_inp.addEventListener('change', () =>{
    const img = new Image();
    img.src = URL.createObjectURL(file_inp.files[0]); //obtiene el src del archivo desde el input
   
    img.onload = () => {
        ctx.drawImage(img, 0, 0);
        const imgData = ctx.context.getImageData(0, 0, img.width, img.height); // dibujar img en el ctx
        
        for (let i = 0; i < imgData.data.length; i += 4) { // aplicar filtro
            const r = imgData.data[i];
            const g = imgData.data[i + 1];
            const b = imgData.data[i + 2];
            
        }
    };
})