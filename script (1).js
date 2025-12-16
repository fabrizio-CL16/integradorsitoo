var turnos = []

function mostrarCrear() {
    document.getElementById("crear").style.display = "block"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "none"
}

function mostrarListar() {
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "block"
    document.getElementById("buscar").style.display = "none"
}

function mostrarBuscar() {
    document.getElementById("crear").style.display = "none"
    document.getElementById("listar").style.display = "none"
    document.getElementById("buscar").style.display = "block"
}

function guardarTurno() {
    var nombre = document.getElementById("nombre").value
    var apellido = document.getElementById("apellido").value
    var dia = document.getElementById("dia").value
    var hora = document.getElementById("hora").value
    var telefono = document.getElementById("telefono").value

    var turno = {
        nombre: nombre,
        apellido: apellido,
        dia: dia,
        hora: hora,
        telefono: telefono
    }

    turnos.push(turno)
    alert("TURNITO GUARDADO")
}

function listarTodos() {
    var div = document.getElementById("listado")
    div.innerHTML = ""

    if (turnos.length == 0) {
        div.innerHTML = "No hay turnos cargados"
        return
    }

    for (var i = 0; i < turnos.length; i++) {
        div.innerHTML +=
            turnos[i].nombre + " " +
            turnos[i].apellido +
            " - Día: " + turnos[i].dia +
            " - Hora: " + turnos[i].hora +
            "<br>"
    }
}

function listarPorDia() {
    var dia = document.getElementById("diaBuscar").value
    var div = document.getElementById("listado")
    div.innerHTML = ""

    var encontrado = false

    for (var i = 0; i < turnos.length; i++) {
        if (turnos[i].dia == dia) {
            div.innerHTML +=
                turnos[i].nombre + " " +
                turnos[i].apellido +
                " - Hora: " + turnos[i].hora +
                "<br>"
            encontrado = true
        }
    }

    if (!encontrado) {
        div.innerHTML = "No hay turnos para ese día"
    }
}

function buscarPorNombre() {
    var nombre = document.getElementById("buscarNombre").value
    var div = document.getElementById("resultadoBusqueda")
    div.innerHTML = ""

    var encontrado = false

    for (var i = 0; i < turnos.length; i++) {
        if (turnos[i].nombre == nombre) {
            div.innerHTML +=
                turnos[i].apellido +
                " - Día: " + turnos[i].dia +
                " - Hora: " + turnos[i].hora +
                "<br>"
            encontrado = true
        }
    }

    if (!encontrado) {
        div.innerHTML = "No se encontró ningún turno"
    }
}
