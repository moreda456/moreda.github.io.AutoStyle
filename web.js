


    var edad = prompt('Cuantos años tienes?');
    var nombre = prompt('Como te llamas?');

    edad = parseInt(edad);

    if(isNaN(edad)){
        alert('Valor Incorecto');
    } else if (edad >= 18) {
        alert('Bienvenido a AUTO STYLE' + ',' + ' ' + nombre);
    } else {
        alert('No puedes ingresar a la pagina web' + ',' + ' ' + nombre);
    }

    function fotos() {
        const li1 = document.getElementById('li1');
        const li2 = document.getElementById('li2');
        const li3 = document.getElementById('li3');
        const li4 = document.getElementById('li4');
        const li5 = document.getElementById('li5');
        const cuadradoDeFotos = document.getElementById('cuadrado-de-fotos');
    
        
        li1.addEventListener('click', () => {
            cuadradoDeFotos.style.backgroundImage = 'url("https://tse2.mm.bing.net/th?id=OIP.QJ9ZJQexeXb8O2Frle2FAQAAAA&pid=Api")';
            cuadradoDeFotos.style.backgroundRepeat = 'no-repeat';
            cuadradoDeFotos.style.backgroundSize = 'cover';
        });
    
        li2.addEventListener('click', () => {
            cuadradoDeFotos.style.backgroundImage = 'url("https://tse3.mm.bing.net/th?id=OIP.c1uqTfg17X1qt5ZjwGMv7wHaEK&pid=Api")';
            cuadradoDeFotos.style.backgroundRepeat = 'no-repeat';
            cuadradoDeFotos.style.backgroundSize = 'cover';
        });
    
        li3.addEventListener('click', () => {
            cuadradoDeFotos.style.backgroundImage = 'url("https://tse2.mm.bing.net/th?id=OIP.hOa9rTnz-dPIAnhQS0Gp2gHaEK&pid=Api")';
            cuadradoDeFotos.style.backgroundRepeat = 'no-repeat';
            cuadradoDeFotos.style.backgroundSize = 'cover';
        });
    
        li4.addEventListener('click', () => {
            cuadradoDeFotos.style.backgroundImage = 'url("https://tse4.mm.bing.net/th?id=OIP.TBRR_wZoIEVfooX-FtoysgHaEK&pid=Api")';
            cuadradoDeFotos.style.backgroundRepeat = 'no-repeat';
            cuadradoDeFotos.style.backgroundSize = 'cover';
        });
    
        li5.addEventListener('click', () => {
            cuadradoDeFotos.style.backgroundImage = 'url("https://tse2.mm.bing.net/th?id=OIP.C-5nRwmjqD9hpWEq5irg6AHaEK&pid=Api")';
            cuadradoDeFotos.style.backgroundRepeat = 'no-repeat';
            cuadradoDeFotos.style.backgroundSize = 'cover';
        });
    }
    
   
    document.addEventListener('DOMContentLoaded', fotos);
    




