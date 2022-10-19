class clsComprobar{
    constructor(prueba){
        this.superadas=[];
        this.prueba=prueba;
        this.comprobar();
    }
    comprobar(){
        this.superadas.push(this.prueba);
        if(this.superadas.length == 1){
            console.log("1 PRUEBA")
            document.getElementById("bomba").id = "bomba1"
        }
        if(this.superadas.length == 2){
            console.log("2 PRUEBA")
            document.getElementById("bomba").id = "bomba2"
        }
        if(this.superadas.length == 3){
            console.log("3 PRUEBA")
            document.getElementById("bomba").id = "bomba3"
            setTimeout(() => {
                this.bombadesactivada.play();
          }, "1000")
        }
    }
}