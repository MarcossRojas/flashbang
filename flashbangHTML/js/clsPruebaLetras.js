


const letras = {
    facil: ["a", "f", "s", "d", "i", "o"].sort(),
    normal: ["n", "r", "t", "h", "a", "o"].sort(),
    dificil: ["n", "r", "t", "h", "a", "o"].sort()
}
var position = 0

const palabra = {
    facil: "adios",
    normal: "raton",
    dificil: "movil"
}

let respuesta = ""
const letrasBorradas = []

document.addEventListener("keydown", presionaTecla)

function presionaTecla(event) {

    const teclaPress = event.key.toLowerCase();
    const listLenght = letras.facil.length - 1

    switch (teclaPress) {
        case "arrowleft":
            if (position === 0) {
                position = listLenght
            }
            else {
                position--

            }
            console.log(position, position >= 0)
            console.log(letras.facil[position])
            break
        case "arrowright":
            if (position < listLenght) {
                position++

            } else {
                position = 0
            }
            console.log(" array 1", letras.facil)
            console.log("elemento de la lista", letras.facil[position])
            console.log(position)
            break
        case " ":
            const letraSelecionada = letras.facil[position]
            if (letraSelecionada) {
                respuesta = respuesta + letraSelecionada
                letrasBorradas.push(letraSelecionada)
                letras.facil = letras.facil.filter(letra => letra !== letraSelecionada)

                if (respuesta.length >= palabra.facil.length) {
                    if (respuesta === palabra.facil) {

                        console.log("has ganado")

                    } else {

                        console.log("has perdido")

                    }
                }

            }

            console.log(letrasBorradas)
            console.log(respuesta)

            break
        case "arrowdown":
            const borrar = letrasBorradas.pop()

            if (borrar) {
                respuesta = respuesta.replace(borrar, "")
                letras.facil.push(borrar)
                letras.facil.sort()
            }

            console.log(letras.facil)
            console.log(respuesta)
            break
        default:
            break


    }

    document.addEventListener("keyup", sueltaTecla)

    function sueltaTecla(event) {
        console.log(event)
    }
}