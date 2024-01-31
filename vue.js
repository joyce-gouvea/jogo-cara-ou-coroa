var app = new Vue({
  el: '#app',
  data: {
    titulo: "Jogo - cara ou coroa",
    textoLabel: "Escolha se cara ou coroa vai ganhar:",
    textoBotaoIniciarJogo: "Jogar",
    textoBotaoLimpar: "Limpar",
    ladoMoedaUsuario: "",
    ladoMoedaMaquina: "",
    resultadoJogo: "",
    ladoMoedaGanhador: "",
    usuarioMoeda: "Você tirou:",
    maquinaMoeda: "A máquina tirou:",
    mostrarParagrafo: false,
    mostrarImagemCaraUsuario: false,
    mostrarImagemCoroaUsuario: false,
    mostrarImagemCaraMaquina: false,
    mostrarImagemCoroaMaquina: false,
    mostrarJogo: false,
    mostrarBotao: false,
  },
  methods:{

    compararValores: function(){
      /*0 é CARA, 1 é COROA*/

      this.ladoMoedaUsuario = parseInt(Math.random()*2);
      this.ladoMoedaMaquina = parseInt(Math.random()*2);

      if(this.ladoMoedaGanhador == "cara" && this.ladoMoedaUsuario == 0 && this.ladoMoedaMaquina == 0){
        this.empateCara();
      }else if(this.ladoMoedaGanhador == "coroa" && this.ladoMoedaUsuario == 1 && this.ladoMoedaMaquina == 1){
        this.empateCoroa();
      }

      if(this.ladoMoedaGanhador == "cara" && this.ladoMoedaUsuario == 0 && this.ladoMoedaMaquina == 1){
        this.vitoriaCaraUsuario();
      }else if(this.ladoMoedaGanhador == "coroa" && this.ladoMoedaUsuario == 1 && this.ladoMoedaMaquina == 0){
        this.vitoriaCoroaUsuario();
      }

      if(this.ladoMoedaGanhador == "cara" && this.ladoMoedaUsuario == 1 && this.ladoMoedaMaquina == 0){
        this.vitoriaCaraMaquina();
      }else if(this.ladoMoedaGanhador == "coroa" && this.ladoMoedaUsuario == 0 && this.ladoMoedaMaquina == 1){
        this.vitoriaCoroaMaquina();
      }

     if(this.ladoMoedaGanhador == "cara" && this.ladoMoedaUsuario == 1 && this.ladoMoedaMaquina == 1){
      this.derrotaNinguemAcertouCara();
     }else if(this.ladoMoedaGanhador == "coroa" && this.ladoMoedaUsuario == 0 && this.ladoMoedaMaquina == 0){
      this.derrotaNinguemAcertouCoroa();
     }
      
    },

    empateCara: function(){
      this.limparImagemLadoMoeda();
      this.mensagemEmpate();
      this.exibirQuadroJogo();
      this.exibirMoedaCaraUsuario();
      this.exibirMoedaCaraMaquina();
      this.exibirBotao();
    },

    empateCoroa: function(){
      this.limparImagemLadoMoeda();
      this.mensagemEmpate();
      this.exibirQuadroJogo();
      this.exibirMoedaCoroaUsuario();
      this.exibirMoedaCoroaMaquina();
      this.exibirBotao();
    },

    mensagemEmpate: function(){
      this.exibirResultado();
      this.resultadoJogo = "Empataram.";
    },

    mensagemVitoriaUsuario: function(){
      this.exibirResultado();
      this.resultadoJogo = "Você ganhou!";
    },

    vitoriaCaraUsuario: function(){
      this.limparImagemLadoMoeda();
      this.mensagemVitoriaUsuario();
      this.exibirQuadroJogo();
      this.exibirMoedaCaraUsuario();
      this.exibirMoedaCoroaMaquina();
      this.exibirBotao();
    },

    vitoriaCoroaUsuario: function(){
      this.limparImagemLadoMoeda();
      this.mensagemVitoriaUsuario();
      this.exibirQuadroJogo();
      this.exibirMoedaCoroaUsuario();
      this.exibirMoedaCaraMaquina();
      this.exibirBotao();
    },

    mensagemVitoriaMaquina: function(){
      this.exibirResultado();
      this.resultadoJogo = "A máquina ganhou!";
    },

    vitoriaCaraMaquina: function(){
      this.limparImagemLadoMoeda();
      this.mensagemVitoriaMaquina();
      this.exibirQuadroJogo();
      this.exibirMoedaCoroaUsuario();
      this.exibirMoedaCaraMaquina();
      this.exibirBotao();
    },

    vitoriaCoroaMaquina: function(){
      this.limparImagemLadoMoeda();
      this.mensagemVitoriaMaquina();
      this.exibirQuadroJogo();
      this.exibirMoedaCaraUsuario();
      this.exibirMoedaCoroaMaquina();
      this.exibirBotao();
    },

    mensagemDerrotaNinguemAcertou: function(){
      this.exibirResultado();
      this.resultadoJogo = "Ninguém acertou o lado vencedor.";
    },

    derrotaNinguemAcertouCoroa: function(){
      this.limparImagemLadoMoeda();
      this.mensagemDerrotaNinguemAcertou();
      this.exibirQuadroJogo();
      this.exibirMoedaCaraUsuario();
      this.exibirMoedaCaraMaquina();
      this.exibirBotao();
    },

    derrotaNinguemAcertouCara: function(){
      this.limparImagemLadoMoeda();
      this.mensagemDerrotaNinguemAcertou();
      this.exibirQuadroJogo();
      this.exibirMoedaCoroaUsuario();
      this.exibirMoedaCoroaMaquina();
      this.exibirBotao();
    },

    exibirQuadroJogo: function(){
      this.mostrarJogo = true;
    },

    exibirMoedaCaraUsuario: function(){
      this.mostrarImagemCaraUsuario = true;
    },

    exibirMoedaCoroaUsuario: function(){
      this.mostrarImagemCoroaUsuario = true;
    },

    exibirMoedaCaraMaquina: function(){
      this.mostrarImagemCaraMaquina = true;
    },

    exibirMoedaCoroaMaquina: function(){
      this.mostrarImagemCoroaMaquina = true;
    },

    exibirBotao: function(){
      this.mostrarBotao = true;
    },

    exibirResultado: function(){
      this.mostrarParagrafo = true;
    },

    ocultarMoedaCaraUsuario: function(){
      this.mostrarImagemCaraUsuario = false;
    },

    ocultarMoedaCoroaUsuario: function(){
      this.mostrarImagemCoroaUsuario = false;
    },

    ocultarMoedaCaraMaquina: function(){
      this.mostrarImagemCaraMaquina = false;
    },

    ocultarMoedaCoroaMaquina: function(){
      this.mostrarImagemCoroaMaquina = false;
    },

    limparImagemLadoMoeda: function(){ 
      if(this.mostrarImagemCaraMaquina = true){
        this.ocultarMoedaCaraMaquina();
      }

      if(this.mostrarImagemCoroaMaquina = true){
        this.ocultarMoedaCoroaMaquina();
      }

      if(this.mostrarImagemCaraUsuario = true){
        this.ocultarMoedaCaraUsuario();
      }

      if(this.mostrarImagemCoroaUsuario = true){
        this.ocultarMoedaCoroaUsuario();
      }
    },

    limparEscolhaLadoGanhador: function(){
      this.ladoMoedaGanhador = "";
    },

    limparTudo: function(){ 
      this.limparEscolhaLadoGanhador();
      this.ocultarParagrafoResultadoJogo();
      this.ocultarQuadroJogo();
    },

    ocultarParagrafoResultadoJogo: function(){
      this.mostrarParagrafo = false;
    },

    ocultarQuadroJogo: function(){
      this.mostrarJogo = false;
    },

    ocultarBotaoJogo: function(){
      this.mostrarBotao = false;
    },
   
  },
  mounted: function () {
    
		
	},
  template :
  `
  <div class="principal">

    <h1 class="titulo">{{ titulo }}</h1>

    <div class="quadrado-default quadradoTopo-detalhes">
        <label for="ladoGanhador" class="txt-default">{{ textoLabel }}</label>

        <input type="text" id="ladoGanhador" class="valoresMoeda-default" v-model="ladoMoedaGanhador">
    </div>

    <div class="botoes">
      <button class="botao-default" @click="compararValores()">{{ textoBotaoIniciarJogo }}</button>

      <button class="botao-default" @click="limparTudo(); ocultarBotaoJogo()" v-if="mostrarBotao == true">{{ textoBotaoLimpar }}</button>
    </div>

    <div class="container" v-if="mostrarJogo == true">

      <div class="quadrado-default quadrado-moedaDetalhes">

        <p class="txt-default">{{ usuarioMoeda }}</p>

        <img src="cara-jogo.png" class="quadrado-imgMoeda" v-if="mostrarImagemCaraUsuario == true"></img>

        <img src="coroa-jogo.png" class="quadrado-imgMoeda" v-if="mostrarImagemCoroaUsuario == true"></img>

      </div>

      <div class="quadrado-default quadrado-moedaDetalhes">

        <p class="txt-default">{{maquinaMoeda}}</p>

        <img src="cara-jogo.png" class="quadrado-imgMoeda" v-if="mostrarImagemCaraMaquina == true"></img>

        <img src="coroa-jogo.png" class="quadrado-imgMoeda" v-if="mostrarImagemCoroaMaquina == true"></img>

      </div>

    </div>

    <p class="resultadoJogo" v-if="mostrarParagrafo == true">{{ resultadoJogo }}</p>

  </div>

  `
});