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


var glide01 = new Glide('.glide01', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide01.mount()


var glide02 = new Glide('.glide-prog', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide02.mount()
