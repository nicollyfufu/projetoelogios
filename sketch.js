let palavra;

function setup() {
 createCanvas(400, 400);
  palavra = palavraAleatoria();
}
  
function palavraAleatoria(){
  let palavras = ["maluca", "pirada", "chucra", "louca"]
  return random(palavras);
  
}

function inicializaCores (){
background("black");
  fill("red")
  textSize(64);
  textAlign(CENTER,CENTER);
}

function palavraParcial(minimo, maximo){
  let quantidade= map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial= palavra.substring(0,quantidade);
  return parcial;
}

function draw() {
  inicializaCores ();
  let texto = palavraParcial (0, width)
  text (texto, 200, 200);
  
  /*if(mouseX<50){
  let palavra= "c";
  text(palavra,200,200);
} else if (mouseX<100){
  let palavra="ch";
  text(palavra,200,200);
} else if (mouseX<150){
  let palavra="chu";
  text(palavra,200,200);
}  else if (mouseX<200){
  let palavra="chuc";
  text(palavra,200,200);
} else if (mouseX<250){
  let palavra="chucr";
  text(palavra,200,200);
} else if (mouseX<300){
  let palavra="chucra";
  text(palavra,200,200);
} */
  
}