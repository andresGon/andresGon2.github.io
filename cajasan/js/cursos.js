// ====================== menu =======================

var btnMenu = document.getElementById('btnMenu');
var menu = document.getElementById('menu');
var wordMenu = document.getElementById('wordMenu')


btnMenu.addEventListener("click",

   function(){
     console.log('click boton')

     menu.classList.toggle("open");
     btnMenu.classList.toggle("over");
     if (wordMenu.innerHTML === "Menú") {
         wordMenu.innerHTML = "Cerrar";
       } else {
         wordMenu.innerHTML = "Menú";
       }

   }

);


// ====================== tab menu =======================
var persona = document.getElementById('btnPer');
var empresa = document.getElementById('btnEmp');
var wrapPer = document.getElementById('wrapPer');
var wrapCom = document.getElementById('wrapCom');
var vistaPer = true;
persona.addEventListener("click", function(){
  if (vistaPer) {
  }else{
    wrapPer.classList.add('animated','fadeIn');
    wrapPer.style.display = "block";
    wrapCom.style.display = "none";
    persona.classList.toggle('active');
    empresa.classList.toggle('active');
    vistaPer = true;
  }
  console.log(vistaPer);
});


empresa.addEventListener("click", function(){
  if (vistaPer) {
    wrapPer.style.display = "none";
    wrapCom.classList.add('animated','fadeIn');
    wrapCom.style.display = "block";
    persona.classList.toggle('active');
    empresa.classList.toggle('active');
      vistaPer = false;
  }else {

  }
  console.log(vistaPer);
});


// =========================== 7. 2 carrusel ====================


var glide07 = new Glide('.glide07', {
  type: 'carousel',
  perView: 2.2,
  focusAt: 0
})
glide07.mount()



// ======================= 9. tres columnas  carrusel ================

var glide03 = new Glide('.glide03', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide03.mount()

// =========================== 5. 1/2 carrusel ====================


var glide05 = new Glide('.glide05', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide05.mount()



var glide052 = new Glide('.glide052', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide052.mount()


var glide053 = new Glide('.glide053', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide053.mount()

var glide054 = new Glide('.glide054', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide054.mount()

var glide055 = new Glide('.glide055', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide055.mount()

var glide056 = new Glide('.glide056', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide056.mount()
