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


// ====================== slide glide =======================





var glide03 = new Glide('.glide03', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide03.mount()


var glide04 = new Glide('.glide04', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide04.mount()


var glide07 = new Glide('.glide07', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide07.mount()



var glide06 = new Glide('.glide06', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide06.mount()


var glide061 = new Glide('.glide061', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide061.mount()


var glide062 = new Glide('.glide062', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide062.mount()


var glide063 = new Glide('.glide063', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide063.mount()



var glide064 = new Glide('.glide064', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 0
})
glide064.mount()




// =========================== 7. 2 carrusel ====================


var glide072 = new Glide('.glide072', {
  type: 'carousel',
  perView: 2.2,
  focusAt: 1
})
glide072.mount()






// ========================= 3. destacado pricipal carrusel ======================

var glide02 = new Glide('.glide02', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})

glide02.mount()
