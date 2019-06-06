 // new Glide('.glide').mount()



// ========================= 3. destacado pricipal carrusel ======================

var glide02 = new Glide('.glide02', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})

glide02.mount()



// ====================== 4. promo carrusel  ==========================


var glide04 = new Glide('.glide04', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})

glide04.mount()


// =========================== 5. 1/2 carrusel ====================


var glide05 = new Glide('.glide05', {
  type: 'carousel',
  perView: 1.5,
  focusAt: 1
})
glide05.mount()



// =========================== 7. 2 carrusel ====================


var glide07 = new Glide('.glide07', {
  type: 'carousel',
  perView: 2.2,
  focusAt: 1
})
glide07.mount()


// ======================= 9. tres columnas  carrusel ================

var glide03 = new Glide('.glide03', {
  type: 'carousel',
  perView: 1.2,
  focusAt: 'center'
})
glide03.mount()





// ===========================  11. 4 carrusel ====================


var glide10 = new Glide('.glide10', {
  type: 'carousel',
  perView: 2.2,
  focusAt: 0
})
glide10.mount()




 // ====================== menu =======================

 var btnMenu = document.getElementById('btnMenu');
 var menu = document.getElementById('menu');
 var wordMenu = document.getElementById('wordMenu')
 var body = document.getElementById('body')


 btnMenu.addEventListener("click",

    function(){
      console.log('click boton')

      menu.classList.toggle("open");
      btnMenu.classList.toggle("over");
      body.classList.toggle("noScroll");
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
