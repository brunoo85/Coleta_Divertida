var i;//indice do vetor das imagens
var img=[]; //imagens

class Dados {
  constructor(){
    this.somat=5; //meta da quantidade de vezes que o lixo cai
    this.somal=0; //quantidade de vezes que o lixo cai
    this.nivel=1; // nivel
    this.tela=1;
    this.vida=3; 
    this.dista=0; //distancia do lixo para a lixeira
    this.pontos=0; //pontos
    this.pontos0=10; //barreira de pontos
  }
}


class Lixeira { //variaveis referentes à lixeira e ao corte da imagem 
  
  constructor(image,xi,yi,xf,yf,ci,di,cf,df){
    this.image = image;
    this.xInicial=xi;
    this.yInicial=yi;
    this.xFinal=xf;
    this.yFinal=yf;
    this.aInicial=ci;
    this.bInicial=di;
    this.aFinal=cf;
    this.bFinal=df;
  }
  
  renderLixeira(){
    image(this.image, this.xInicial,this.yInicial,this.xFinal,this.yFinal,this.aInicial, this.bInicial,this.aFinal,this.bFinal);
  }
  
}


class Rejeito extends Dados{
  
  constructor(number){
    super();
    this.number=Math.floor(number); //
    this.star= Math.floor(Math.random()*5+1);
    this.a1=300; //x do rejeito
    this.b1=0; //y do rejeito
    this.velocidade=2+this.nivel; 
    this.x1=0; //variavel relativa à lixeira certa
  }
    
  
    desenharLixo(){
    switch (number){
      case 1:
        this.x1=42;
        image(img[number],this.a1,this.b1,32,60);
      break;
      
      case 2:
        this.x1=42;
        image(img[number],this.a1,this.b1,45,50);
      break;
      
      case 3:
        this.x1=42;
        image(img[number],this.a1,this.b1,40,55);
      break;
      
      case 4:
        this.x1=42;
        image(img[number],this.a1,this.b1,45,55);
      break;
      
      case 5:
        this.x1=162;
        image(img[number],this.a1,this.b1,49,47);
      break;
      
      case 6:
        this.x1=162;
        image(img[number],this.a1,this.b1,30,45);
      break;
      
      case 7:
        this.x1=162;
        image(img[number],this.a1,this.b1,47,47);
      break;
      
      case 8:
        this.x1=162;
        image(img[number],this.a1,this.b1,52,47);
      break;
      
      case 9:
        this.x1=288;
        image(img[number],this.a1,this.b1,30,45);
      break;
      
      case 10:
        this.x1=288;
        image(img[number],this.a1,this.b1,30,45);
      break;
      
      case 11:
        this.x1=288;
        image(img[number],this.a1,this.b1,38,55);
      break;
      
      case 12:
        this.x1=288;
        image(img[number],this.a1,this.b1,30,55);
      break;
      
      case 13:
        this.x1=410;
        image(img[number],this.a1,this.b1,28,60);
      break;
      
      case 14:
        this.x1=410;
        image(img[number],this.a1,this.b1,30,45);
      break;
      
      case 15:
        this.x1=410;
        image(img[number],this.a1,this.b1,32,37);
      break;
      
      case 16:
        this.x1=410;
        image(img[number],this.a1,this.b1,25,55);
      break;
      
      case 17:
        this.x1=529;
        image(img[number],this.a1,this.b1,30,45);
      break;
      
      case 18:
        this.x1=529;
        image(img[number],this.a1,this.b1,30,45);
      break;
      
      case 19:
        this.x1=529;
        image(img[number],this.a1,this.b1,35,45);
      break;
      
      case 20:
        this.x1=529;
        image(img[number],this.a1,this.b1,55,37);
      break;
      
      default:
        console.log("nada");
    }
  }
  
   analisaVelocidade(){
    if(this.nivel==1){
      return 1.5;
    }else{
      return 2;
    }
  }
  
   queda(){
     this.b1+=this.nivel;
   }

  analisarAcerto(number){
     this.b1=0;
    this.number=Math.floor(Math.random()*20+1);//escolha do residuo
    this.somal++;
    this.star=Math.floor(Math.random()*5+1); //escolha da estrela
  }    
  
  desenharEstrela(){
    let c=55;
    switch (this.star){
      case 1:
        this.x1=529;
        image(img[23+this.star],this.a1,this.b1,c,c);
      break;
      
      case 2:
        this.x1=288;
        image(img[23+this.star],this.a1,this.b1,c,c);
      break;
      
      case 3:
        this.x1=162;
        image(img[23+this.star],this.a1,this.b1,c,c);
      break;
      
      case 4:
        this.x1=42;
        image(img[23+this.star],this.a1,this.b1,c,c);
      break;
      
      case 5:
        this.x1=410;
        image(img[23+this.star],this.a1,this.b1,c,c);
      break;
  }
  
  }
}

function setup() {
  createCanvas(600, 450);
}

function preload() {
  for(i=0;i<=37;i++){
  img[i]  = loadImage('images/img'+i+'.png');}  
}

/*
ESQUEMA DO VETOR DAS IMAGENS
0 - LIXEIRAS
1-4 - RESIDUOS DO PLASTICO
5-8 - RESIDUOS DO PAPEL
9-12 - RESIDUOS DO METAL
13-15 - RESIDUOS DO VIDRO
16-20 - RESIDUOS DO ORGANICO
21 - 23 - CORAÇÕES
24 - ESTRELA MARROM (acertar a lixeira orgânico)
25 - ESTRELA AMARELA (acertar a lixeira metal)
26 - ESTRELA AZUL (acertar a lixeira papel)
27 - ESTRELA VERMELHA (acertar a lixeira plástico)
28 - ESTRELA VERDE  (acertar a lixeira vidro)
29 - fundo de primavera
30 - fundo de verão 
31 - fundo de outono
32 - fundo de inverno
33 - fundo da tela 1
34 - todas as latas com stars;
35 - fundo tutorial;
36 - fundo game over;
37 - fundo vencendor;

*/

let jogo = new Dados(); //declarando as variaveis do jogo
let number=Math.floor(Math.random()*20+1); //declarando o numero aleatorio que será usado para o rejeito
let llixo = new Rejeito(number);//declarando o rejeito

function draw() {
  
  
  if(jogo.tela==1){
 background(img[33],600,450);
  //tela inicial
    textSize(68)
    textFont('Fredoka One')
     //fonte da frase abaixo
    fill(139,0,139);
    stroke(5);
    strokeWeight(3);
    text("Coleta Divertida",35,95);
    noStroke();
    fill(173,255,47)
     textSize(30)
     //textFont('Modak');
    fill(34,139,34); 
    //AS ALTERAÇÕES NA TELA INICIAL AQUI 
   stroke(5);
    strokeWeight(3);
    fill(173,255,47) //cor do retangulo de "pressione enter"
    rect(45, 127, 250, 100, 20);
    rect(320, 127, 250, 100, 20);
     fill(34,139,34); // cor das letras da tela
     noStroke();
    text("Como jogar?",87,160);
    text("Pressione Enter",57,205);
    text("Pressione CTRL",336,205);
    text("Jogar!",400,160);
       if (keyIsDown(13)){
			jogo.tela = 2 }//aqui é onde ele aperta o enter
    if(keyIsDown(17)){
    jogo.tela=3}
  }
  //tela do jogo
  else if(jogo.tela==2){
  background(img[35],600,550);
   textFont('Fredoka One');
    textSize(40);
    fill(50,205,50);
    text("OLÁ, ECOAMIGO!",145,50);
    textSize(30);
    text("Seja bem vindo ao Coleta Divertida",53,87);
     fill(173,255,47);
    stroke(3);
     strokeWeight(3);
    rect(30, 95, 550, 88, 20);
    textSize(20);
    noStroke();   
    fill(50,205,50);
    text("Neste jogo você, como um bom amigo do meio ambiente,",40,120);      
    text("tem a missão de destinar corretamente os resíduos e as",40,140); 
    text("estrelas da sorte em suas respectivas lixeiras!",40,158);
    text("Como ilustrado abaixo:",40,177);
    fill(173,255,47);
    stroke(3);
    strokeWeight(3);
    rect(32, 392, 288, 55, 20);
    noStroke();
    fill(50,205,50);
    text("Agora que estás preparado",42,414);
    text("pressione 'ctrl' para começar",38,433);  
    //rect(12,270,500,100);
     image(img[34],25,188,550,200);
    if(keyIsDown(17)){
    jogo.tela=3}
  }

  else if(jogo.tela==3){
    llixo.dista= parseInt((dist(llixo.a1,llixo.b1+10,llixo.x1,303)));
    if(llixo.nivel==1){background(img[29],600,450);}
  else if(llixo.nivel==2){background(img[30],600,450);}
  else if(llixo.nivel==3){background(img[31],600,450);}
  else {background(img[32],600,450);}

    //desenhando as lixeiras
  let plastico = new Lixeira(img[0],12, 350,90,100,151,2,122,200);
  let papel = new Lixeira(img[0],132,350,90,100,304,1,124,201);
  let metal = new Lixeira(img[0],258,350,90,100,456,1,124,201); 
  let vidro = new Lixeira(img[0],380,350,90,100,1,1,124,204); 
  let organico = new Lixeira(img[0],499,350,90,100,608,1,122,200); 
    
  plastico.renderLixeira(); //lixeira plastico
  papel.renderLixeira(); //lixeira papel
  metal.renderLixeira(); //lixeira metal
  vidro.renderLixeira(); //lixeira vidro
  organico.renderLixeira(); //lixeira organico
    
 
    if(llixo.b1<307){
      llixo.queda();
    }else{
    number= Math.floor(Math.random()*20+1);
    llixo.analisarAcerto(number);
    }
    
    llixo.analisaVelocidade();
  
    if(llixo.b1==307){
     llixo.desenharLixo(number);
    }
    
  if(llixo.pontos>llixo.pontos0){
    llixo.nivel++;
    llixo.pontos0+=10;
  }
    
   if(llixo.a1>600){llixo.a1=0}
    if(llixo.a1<0){llixo.a1=600} //limites para atravesar
    
  if(llixo.somal!==llixo.somat){ // para saber se deve sair uma estrela ou um lixo
      llixo.desenharLixo(number);
    
   while(llixo.b1==306){ //quando o lixo toca no y determinado, é avaliado se o jogador acertou ou não
      if(llixo.dista<=43){ //se a distância do centro da lixeira for menor que 43px, ele acertou, caso contrario, errou
        llixo.pontos++;
      } else{
        llixo.vida--;
      }
      llixo.b1++; //lixo avança e volta pro inicio
    }
  }
    else{
      llixo.desenharEstrela();
      
      while(llixo.b1==306){
    
        if(llixo.dista<=43){
          llixo.pontos+=3;
          }
        else{ 
          llixo.vida--;
        }
      llixo.b1++;
      llixo.somat+=5;
      }
    }
  
  //comandos do lixo
  if (keyIsDown(LEFT_ARROW))
    llixo.a1-=3+(llixo.nivel*2);

  if (keyIsDown(RIGHT_ARROW))
    llixo.a1+=3+(llixo.nivel*2);
    
  if (keyIsDown(DOWN_ARROW))
    llixo.b1+=3+(llixo.nivel*2);
    
    
  textSize(20)
     noStroke();
    fill(139,0,139);
  text("Pontos: "+llixo.pontos,7,18); 
  text("Nivel: "+llixo.nivel,520,18); 
  text("Vidas: ",162,18);
    //DESENHO DOS CORAÇÕES
    if(llixo.vida==3){
    image(img[23],222,2,65,18);
    }
    else if(llixo.vida==2){
    image(img[22],222,2,45,18);
    }
    else if(llixo.vida==1){
    image(img[21],222,0,25,25);
    }
    
  if(llixo.vida<=0){
  jogo.tela=4;
  }

  }
  
  //tela final
  else if(jogo.tela==4){
    background(img[36],600,450);
    textSize(30);
    textFont('Fredoka One');
    fill(0,0,0);
    text("FALHAS-TE NA MISSÃO, ECOAMIGO!",30,95);
    noStroke();
    fill(124,252,0)
    rect(80, 360, 455, 50, 20);
    textSize(22)
    fill(1,139,34);
    text("Para continuar, aperte barra de espaço",100,390)
    if(keyIsDown(32)){
      jogo.tela=1;
      llixo.vida=3;
      llixo.pontos=0;
      llixo.nivel=1;
    }
  } else if(llixo.nivel==5){
  jogo.tela=5}
  
  if(jogo.tela==5){
    background(img[37],600,450);
  textSize(30)
    textFont('Fredoka One');
     fill(255,255,0)
    rect(95, 135, 445, 50, 20);
    fill(21,65,0);
    text("CHEGASTES ATÉ O FINAL",132,170);
    text("PARABÉNS",240,115);
    noStroke();
    fill(124,252,0)
    rect(80, 360, 455, 50, 20);
    textSize(22)
    fill(1,139,34);
    text("Para voltar ao inicio, pressione espaço",100,390)
    if(keyIsDown(32)){
    jogo.tela=1;
    llixo.vida=3;
    llixo.pontos=0;
    n=1;
  }
  //os dados da tela do jogo acabam aqui
  }
}