
let body = document.querySelector('body');
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
body.appendChild(canvas);
const ctx = canvas.getContext('2d');
let img = new Image();
img.onload = muovi;
img.src = 'cuore.png';

let cuori = []
let ncuori = 100;
function nuovoCuore(){
    let dim = Math.max(Math.random(),0.2)*(window.innerWidth/1.4);
    let x = (Math.random()*(window.innerWidth + dim)) - dim;
    let y = window.innerHeight + Math.random()*(window.innerHeight*1.2);
    let speed = 1 + Math.random();
    return {x:x,y:y,dim:dim,speed:speed};
}

for(let i = 0; i< ncuori; i++){
    cuori.push(nuovoCuore());

};

function muovi(){
    let i = 0;

    setInterval(()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(let c of cuori){
            if(c.y < 0 - c.dim){
                cuori.splice(cuori.indexOf(c),1);
                cuori.push(nuovoCuore());
            }
        }
        for(let c of cuori){
            ctx.drawImage(img, c.x, (c.y*c.speed)/1.2,c.dim,c.dim);
            c.y--;
        } 
    },1000/60);
    
}
muovi();