let imagen;
let cant;
let cantRects = 22;
let anchoTotal = 300;

function preload() {
  imagen = loadImage("28.jpg");
}

function setup() {
  createCanvas(800, 400);
  cant = 18;
  noStroke();
}

function draw() {
  background(120);

  image(imagen, 0, 0, width / 2, height);

  repeticion(cant, width / 2, 0, width / 2);

  franjaRectangulos();
}

function triangulo(x, y, lado) {
  triangle(x, y, x + lado, y, x + lado, y + lado);
}

function triangulo2(x, y, lado) {
  triangle(x, y, x - lado, y, x - lado, y - lado);
}

function repeticion(cantidad, x, y, tam) {
  for (let i = 0; i <= cantidad; i++) {
    let tamMinimo = tam / cantidad;

    let x1 = map(i, 0, cantidad, x, x + tam - tamMinimo);
    let t1 = map(i, 0, cantidad, tam, tamMinimo);

    let x2 = map(i, 0, cantidad, width, width - tam + tamMinimo);
    let t2 = map(i, 0, cantidad, tam, tamMinimo);

    if (impar(i)) {
      fill(0);
    } else {
      fill(255);
    }
    triangulo(x1, y, t1);
    triangulo2(x2, height, t2);
  }
}

function impar(indice) {
  return indice % 2 === 1;
}

function franjaRectangulos() {
  let espacioDisponible = width / 2 - anchoTotal;
  let xInicial = width / 2 + espacioDisponible / 2;

  let anchoRect = anchoTotal / cantRects;

  for (let i = 0; i < cantRects; i++) {
    if (i % 2 === 0) {
      fill(255);
    } else {
      fill(0);
    }
    rect(xInicial + (i * anchoRect), height / 8, anchoRect, 300);
  }
}

function mousePressed() {
  if (cant < 40) {
    cant++;
  }
}

function keyPressed() {
  cant = 6;
}