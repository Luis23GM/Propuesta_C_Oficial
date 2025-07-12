let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

function reloadGif(imgId, src) {
    const img = document.getElementById(imgId);
    if (img) {
        img.src = '';
        setTimeout(() => { img.src = src; }, 10);
    }
}

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';
    reloadGif('happyGifContainer', 'Gifs/mocha5final.gif');

    // Ocultar los botones "Pregunta Sí" y "No "
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Que bueno que dijiste que si!';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
        reloadGif('happyGifContainer2', 'Gifs/mocha6final.gif');
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
        reloadGif('happyGifContainer3', 'Gifs/mocha7final.gif');
    }, 3000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
        reloadGif('happyGifContainer4', 'Gifs/mocha9final.gif');
    }, 4000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';
            reloadGif('sadGifContainer', 'Gifs/mocha2.gif');

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura?';
            document.getElementById('noBtn').style.backgroundColor = '#D6453D';
          
            // Hacer que el botón "Sí" crezca de manera responsive
            const siBtn = document.getElementById('siBtn');
            siBtn.style.fontSize = 'clamp(24px, 5vw, 40px)';
            siBtn.style.padding = 'clamp(15px, 3vw, 20px) clamp(30px, 5vw, 40px)';
       
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segura?!';
            document.getElementById('noBtn').style.backgroundColor = ' #D6453D';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';
            reloadGif('sadGifContainer2', 'Gifs/mocha4.gif');
            noButtonState++;
            break;

        case 2:
            document.getElementById('noBtn').innerHTML = 'Estás segura de verdad, ¿eh?';
            document.getElementById('noBtn').style.backgroundColor = '#D6453D';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';
            reloadGif('sadGifContainer1', 'Gifs/mocha3.gif');
            noButtonState++;
            break;
        
        case 3:
            document.getElementById('noBtn').innerHTML = '¿Eres positiva?';
            document.getElementById('noBtn').style.backgroundColor = '#D6453D';
            noButtonState++;
            break;

        case 4:
            document.getElementById('noBtn').innerHTML = 'Di que si por favor?';
            document.getElementById('noBtn').style.backgroundColor = '#D6453D';
            noButtonState++;
            break;

        case 5:
            // Último caso - Retornar al inicio
            document.getElementById('noBtn').innerHTML = 'No';
            document.getElementById('noBtn').style.backgroundColor = '#D6453D';

            // Restaurar el botón "Sí" a su tamaño original
            const siBtnReset = document.getElementById('siBtn');
            siBtnReset.style.fontSize = 'clamp(16px, 4vw, 24px)';
            siBtnReset.style.padding = 'clamp(10px, 3vw, 20px) clamp(20px, 5vw, 40px)';
            
            // Restaurar los GIFs
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            reloadGif('gifContainerImg', 'Gifs/mocha-bear-hearts.gif');
            document.getElementById('happyGifContainer').style.display = 'none';
            
            // Reiniciar el estado
            noButtonState = 0;
            break;

        default:
            break;
    }
});

// Sincronización de audio entre páginas
const audio = document.getElementById('bg-music');
const AUDIO_KEY = 'bg-music-current-time';

window.addEventListener('DOMContentLoaded', () => {
  const savedTime = localStorage.getItem(AUDIO_KEY);
  if (audio && savedTime) {
    audio.currentTime = parseFloat(savedTime);
    audio.play().catch(() => {});
  }
});

if (audio) {
  setInterval(() => {
    localStorage.setItem(AUDIO_KEY, audio.currentTime);
  }, 1000);
}


