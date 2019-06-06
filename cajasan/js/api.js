 // new Glide('.glide').mount()


 var glide01 = new Glide('.glide01', {
   type: 'carousel',
   perView: 1.2,
   focusAt: 'center',
 })

 glide01.mount()


 var glide02 = new Glide('.glide02', {
   type: 'carousel',
   perView: 1.2,
   focusAt: 'center'
 })

 glide02.mount()

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

    // ====================== apiiiii =======================


    var url = 'https://api.sheety.co/0cb9a43a-e720-4ebb-bf6d-5aa7a04a6200';
    fetch(url)
    .then( response => response.json())
    .then((out) => {
      console.log(out)
      //texto.innerHTML = `<p>${out[0].nombre}</p> <img src="${out[0].imagen}" />`

      out.forEach(
        function(datos){
          out += `<p>${datos.nombre}</p>
                  <img src="${datos.imagen}" />
          `;
        }
      );
      document.getElementById('list').innerHTML = out;
    })
    .catch((err) => console.log(err))
