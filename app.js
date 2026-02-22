// LISTA DE FONDOS (rutas WEB, no rutas de Windows)
const backgrounds = [
  "images/background/fondo-1.png",
  "images/background/fondo-2.jpg",
  "images/background/fondo-3.jpg",
  "images/background/fondo-4.jpg",
  "images/background/fondo-5.webp",
  "images/background/fondo-6.jpg",
  "images/background/fondo-7.jpg",
  "images/background/fondo-8.jpg"
];

// Tiempo entre cambios (milisegundos)
const INTERVAL = 7000;

let index = 0;

// Precarga imágenes para evitar parpadeos
backgrounds.forEach(src => {
  const img = new Image();
  img.src = src;
});

// Asigna el fondo
function setBackground(src){
  const img = new Image();
  img.onload = () => {
    document.body.style.backgroundImage = `url("${src}")`;
  };
  img.onerror = () => {
    console.error("No se pudo cargar:", src);
  };
  img.src = src;
}

// Fondo inicial
setBackground(backgrounds[index]);

// Rotación automática
setInterval(() => {
  index = (index + 1) % backgrounds.length;
  setBackground(backgrounds[index]);
}, INTERVAL);
