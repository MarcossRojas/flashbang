

class clsGame {
    constructor() {
        this.randomizar();
        this.crearPuzles();
    }
    randomizar() {
        console.log("Elige el orden de las pruebas");
        ////////////////////////////////////////////
        let aux = Math.floor(Math.random() * 3);
        switch (aux) {
            case 0:
                this.random = ["cables", "letras", "morse"];

                break;
            case 1:
                this.random = ["morse", "cables", "letras"];


                break;
            case 2:
                this.random = ["letras", "morse", "cables"];

                break;

            default:
                break;

        }

    };

    crearPuzles() {
        let aux = Math.floor(Math.random() * 3);
        this.cables = new clsCables(aux);

    }

}