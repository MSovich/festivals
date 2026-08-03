/* ==========================================================
   PREMIUM HERO EFFECTS
========================================================== */

const canvas = document.getElementById("heroCanvas");
const ctx = canvas.getContext("2d");

let w;
let h;

function resize() {

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);


/* ===========================
      GOLD PARTICLES
=========================== */

const particles = [];

const COUNT = 180;

class Particle {

    constructor(){

        this.reset(true);

    }

    reset(initial=false){

        this.x = Math.random()*w;
        this.y = initial ? Math.random()*h : h+40;

        this.r = Math.random()*2+0.6;

        this.speed = Math.random()*0.4+0.12;

        this.alpha = Math.random()*0.55+0.1;

        this.dx = (Math.random()-.5)*0.18;

    }

    update(){

        this.y -= this.speed;

        this.x += this.dx;

        if(this.y<-20){

            this.reset();

        }

    }

    draw(){

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,220,150,${this.alpha})`;

        ctx.fill();

    }

}

for(let i=0;i<COUNT;i++){

    particles.push(new Particle());

}


/* ===========================
        DRAW LOOP
=========================== */

function animate(){

    ctx.clearRect(0,0,w,h);

    particles.forEach(p=>{

        p.update();

        p.draw();

    });

    requestAnimationFrame(animate);

}

animate();


/* ===========================
       PARALLAX
=========================== */

const silk1=document.querySelector(".silk1");
const silk2=document.querySelector(".silk2");
const silk3=document.querySelector(".silk3");

const mouseLight=document.getElementById("mouseLight");

window.addEventListener("mousemove",(e)=>{

    const x=e.clientX/window.innerWidth-.5;
    const y=e.clientY/window.innerHeight-.5;

    silk1.style.transform=`
translate(${x*40}px,${y*30}px)
rotate(${x*5}deg)
`;

    silk2.style.transform=`
translate(${x*-55}px,${y*-25}px)
rotate(${x*-4}deg)
`;

    silk3.style.transform=`
translate(${x*70}px,${y*45}px)
rotate(${x*6}deg)
`;

    mouseLight.style.left=e.clientX+"px";
    mouseLight.style.top=e.clientY+"px";

});


/* ===========================
      SILK FLOATING
=========================== */

let t=0;

function floatSilk(){

    t+=0.003;

    silk1.style.filter=
`blur(${95+Math.sin(t)*5}px)`;

    silk2.style.filter=
`blur(${95+Math.cos(t*1.2)*6}px)`;

    silk3.style.filter=
`blur(${95+Math.sin(t*.8)*7}px)`;

    requestAnimationFrame(floatSilk);

}

floatSilk();


/* ===========================
    HERO FADE (UPDATED)
=========================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    // Через сколько пикселей начать исчезновение
    const startFade = 500;

    // На протяжении какого расстояния исчезать
    const fadeDistance = 2200;

    let opacity = 1;

    if (window.scrollY > startFade) {
        opacity = 1 - ((window.scrollY - startFade) / fadeDistance);
    }

    // Никогда не исчезает полностью
    hero.style.opacity = Math.max(0.2, opacity);

});