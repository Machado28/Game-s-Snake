let canvas = document.getElementById("cobra");
let context = canvas.getContext("2d");
let box = 62;
let cobra = [];
let position = 0;
let valor = 8;

cobra[position] = {
  x: valor * box,
  y: valor * box
};

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobra() {
      for(  i =0 ; i<cobra.length;i++){
            context.fillStyle="green";
            context.fillRect(cobra[i].x,cobra[i].y,box,box);
      }
}
criarBG();
criarCobra();