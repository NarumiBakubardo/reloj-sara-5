let minutos = 0
let segundos = 0
basic.forever(function () {
    segundos = 1
    basic.pause(1000)
    segundos += 1
    basic.pause(100)
    minutos = 1
    if (minutos == 59) {
        let horas = 0
        minutos += horas
    }
})
