


class clsCables {
      constructor(recuadro) {
            this.audiorojo = document.getElementById("AUDIO-ROJO");
            this.audioazul = document.getElementById("AUDIO-AZUL");
            this.audioverde = document.getElementById("AUDIO-VERDE");
            this.audioflashbang = document.getElementById("AUDIO-FLASHBANG");
            this.audioarriba = document.getElementById("AUDIO-ARRIBA");
            this.audiomedio = document.getElementById("AUDIO-MEDIO");
            this.audioabajo = document.getElementById("AUDIO-ABAJO");
            this.pruebasuperada = document.getElementById("PRUEBA-SUPERADA");
            this.bombadesactivada = document.getElementById("BOMBA-DESACTIVADA");
            this.sonidocortar = document.getElementById("CORTAR")
            this.bomba = document.getElementById("bomba")

            /// atributos ///
            this.acertadas = [];
            this.recuadro = recuadro;
            switch (this.recuadro) {
                  case 0:
                        this.p = document.getElementById("p1");
                        break;
                  case 1:
                        this.p = document.getElementById("p2");

                        break;
                  case 2:
                        this.p = document.getElementById("p3");

                        break

                  default:
                        break;
            }
            /// metodos ///
            this.elegirPatron();

      }

      elegirPatron() {

            console.log("Elige el codigo de colores");
            ////////////////////////////////////////////
            let aux = Math.floor(Math.random() * 3);
            switch (aux) {
                  case 0:
                        this.colores = ["red", "green", "blue"];
                        this.patron = ["red", "green", "blue"];
                        break;
                  case 1:
                        this.colores = ["green", "blue", "red"];
                        this.patron = ["blue", "green", "red"];

                        break;
                  case 2:
                        this.colores = ["blue", "red", "green"];
                        this.patron = ["green", "red", "blue"];
                        break;

                  default:
                        break;
            }
            this.crearRGB();

      }


      crearRGB() {
            this.c1 = document.createElement("div");
            this.c1.className = this.colores[0]
            this.c2 = document.createElement("div");
            this.c2.className = this.colores[1]
            this.c3 = document.createElement("div")
            this.c3.className = this.colores[2];



            this.p.append(this.c1);
            this.p.append(this.c2);
            this.p.append(this.c3);

            this.gestionarEventos();
      }
      gestionarEventos() {
            this.cortados = [];
            this.contAD = -1;
            this.cables = [this.c1, this.c2, this.c3];
            window.addEventListener("keydown", (event) => {
                  switch (event.key) {
                        case "ArrowDown":
                              if (this.contAD >= 2) {
                                    this.contAD = -1;
                              }
                              this.contAD += 1;

                              ///////////////////////////////////////////////////////////////////

                              if (this.c1.className == this.colores[0] && this.contAD == 0) {
                                    switch (this.colores[0]) {
                                          case "red":
                                                this.audioarriba.pause();
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                console.log(this.colores[0]);
                                                this.audioverde.pause();
                                                this.audioazul.pause();

                                                this.audiorojo.play();
                                                setTimeout(() => {
                                                      this.audioarriba.play();
                                                }, "1000");
                                                break;
                                          case "green":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                console.log(this.colores[0]);
                                                this.audioazul.pause();
                                                this.audiorojo.pause();

                                                this.audioverde.play();
                                                setTimeout(() => {
                                                      this.audioarriba.play();
                                                }, "1000");

                                                break;
                                          case "blue":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                this.audiorojo.pause();
                                                this.audioverde.pause();

                                                console.log(this.colores[0]);

                                                this.audioazul.play();
                                                setTimeout(() => {
                                                      this.audioarriba.play();
                                                }, "1000");

                                                break;

                                          default:
                                                break;

                                    }
                                    ///////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////
                                    this.c1.className = this.colores[0] + "_selected";
                                    if (this.c2.className == this.colores[1] || this.c2.className == this.colores[1] + "_selected") {
                                          this.c2.className = this.colores[1];
                                    }
                                    if (this.c3.className == this.colores[2] || this.c3.className == this.colores[2] + "_selected") {
                                          this.c3.className = this.colores[2];
                                    }
                              }
                              /////////////////////////////////////////////////////////////////
                              if (this.c2.className == this.colores[1] && this.contAD == 1) {
                                    switch (this.colores[1]) {
                                          case "red":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                this.audioverde.pause();
                                                this.audioazul.pause();
                                                console.log(this.colores[0]);
                                                this.audiorojo.play();
                                                setTimeout(() => {
                                                      this.audiomedio.play();
                                                }, "1000")


                                                break;
                                          case "green":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                console.log(this.colores[0]);
                                                this.audioazul.pause();
                                                this.audiorojo.pause();
                                                this.audioverde.play();
                                                setTimeout(() => {
                                                      this.audiomedio.play();
                                                }, "1000")

                                                break;
                                          case "blue":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                console.log(this.colores[0]);
                                                this.audiorojo.pause();
                                                this.audioverde.pause();
                                                this.audioazul.play();
                                                setTimeout(() => {
                                                      this.audiomedio.play();
                                                }, "1000")

                                                break;

                                          default:
                                                break;
                                    }
                                    ///////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////
                                    this.c2.className = this.colores[1] + "_selected";

                                    if (this.c1.className == this.colores[0] || this.c1.className == this.colores[0] + "_selected") {
                                          this.c1.className = this.colores[0];

                                    }
                                    if (this.c3.className == this.colores[2] || this.c3.className == this.colores[2] + "_selected") {
                                          this.c3.className = this.colores[2];
                                    }
                              }
                              ///////////////////////////////////////////////////////////////////
                              if (this.c3.className == this.colores[2] && this.contAD == 2) {
                                    switch (this.colores[2]) {
                                          case "red":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();


                                                this.audioverde.pause();
                                                this.audioazul.pause();
                                                console.log(this.colores[0]);
                                                this.audiorojo.play();
                                                setTimeout(() => {
                                                      this.audioabajo.play();
                                                }, "1000")
                                                break;
                                          case "green":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();
                                                console.log(this.colores[0]);
                                                this.audioazul.pause();
                                                this.audiorojo.pause();
                                                this.audioverde.play();
                                                setTimeout(() => {
                                                      this.audioabajo.play();
                                                }, "1000")

                                                break;
                                          case "blue":
                                                this.audioarriba.pause();
                                                this.audiomedio.pause();
                                                this.audioabajo.pause();

                                                console.log(this.colores[0]);
                                                this.audiorojo.pause();
                                                this.audioverde.pause();
                                                this.audioazul.play();
                                                setTimeout(() => {
                                                      this.audioabajo.play();
                                                }, "1000")

                                                break;

                                          default:
                                                break;
                                    }
                                    ///////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////
                                    ///////////////////////////////////////////////////////////////////////////
                                    this.c3.className = this.colores[2] + "_selected";

                                    if (this.c1.className == this.colores[0] || this.c1.className == this.colores[0] + "_selected") {
                                          this.c1.className = this.colores[0];
                                    }
                                    if (this.c2.className == this.colores[1] || this.c2.className == this.colores[1] + "_selected") {
                                          this.c2.className = this.colores[1];
                                    }
                              }
                              break;

                        case "Enter":

                              for (let i = 0; i < this.cables.length; i++) {
                                    if (this.cables[i].className == this.colores[i] + "_selected") {
                                          this.cables[i].className = this.colores[i] + "_cutted";
                                          this.sonidocortar.play();
                                          this.cortados.push(this.colores[i]);
                                          this.comprobarCables();
                                    }

                              }
                              break;

                        default:
                              break;
                  }
            });




      }


      comprobarCables() {
            for (let i = 0; i < this.cortados.length; i++) {
                  if (this.patron[i] != this.cortados[i]) {
                        // explota //
                        this.audioflashbang.play();
                        setTimeout(() => {
                              this.audioarriba.pause();
                              this.audiomedio.pause();
                              this.audioabajo.pause();
                        }, "1000")


                        this.audiorojo.pause();
                        this.audioverde.pause();
                        this.audioazul.pause();
                        console.log("FLASHBANG!")
                        document.getElementById("CREOQUETODO").innerHTML = ""
                        document.getElementById("body").classList.remove('body');
                        document.getElementById("completado").innerHTML = ""

                        document.getElementById("gameover").classList.remove('gameover2');
                        document.getElementById("gameover").classList.add('gameover');
                        document.getElementById("gameover").innerHTML = "GAME OVER"


                  }
            }
            if (this.cortados.length == 3) {
                  console.log("OK!")
                  this.superadas = [];
                  setTimeout(() => {
                        this.audioarriba.pause();
                        this.audiomedio.pause();
                        this.audioabajo.pause();
                  }, "1000")

                  this.audiorojo.pause();
                  this.audioverde.pause();
                  this.audioazul.pause();
                  this.pruebasuperada.play();
                  let pruebacables = 1;

                  this.comprobarprueba = new clsComprobar(pruebacables);
                  // document.getElementById("CREOQUETODO").innerHTML = "";
                  // document.getElementById("completado").classList.remove('completado2');

                  // document.getElementById("completado").classList.add('completado');
                  // document.getElementById("completado").innerHTML = "COMPLETADO";
                  
            }

      }



}