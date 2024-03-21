const edificios = [
    new Hospital("Hospital de Villafranca", 2, 1950, 26), //26 malalts
    new Hospital("Hospital General de Catalunya", 10, 25350, 315), // 315 malalts
    new Cinema ("Cinema Montecarlo", 1, 3180),
    new Cinema ("Cinema Principal", 2, 12450),
    new Hotel ("Hotel Hilton", 22, 73858, 583), // 583 habitaciones
    new Hotel ("Hotel Pepita", 3, 593, 12) //12 habitaciones
]

function escoger() {
    const accionElegida = document.querySelector('input[name="accionElegida"]:checked').value;
    switch (accionElegida) {
        case "darDeAlta":
            darDeAlta();
            break;
        case "eliminarEdificio":
            eliminarEdificio();
            break;
        case "mostrarEdificio":
            mostrarEdificio();
            break;
        default:
            break;
    }
}

function mostrarEdificio () {
    
    let edificioBuscado = prompt("Indica el nombre del edificio buscado:");

    let index = edificios.findIndex(edificios => edificios.getNombre() === edificioBuscado);
    
    if (index === -1) { // Si no existe
        alert("Nombre no válido.")
    } else {
        let edificio = edificios[index];
        
        
        document.getElementById('mensaje').innerHTML = edificio.toString();
        // también funciona sin instanceof

        console.table(edificios);
        
    }
}

function darDeAlta (){
    let nuevoNombreEdificio = prompt("Indica el nombre del nuevo edificio:");
    let index = edificios.findIndex(edificio => edificio.nombreEdificio == nuevoNombreEdificio);
    
    if (index === -1) {
        let nuevoNumPlantas = parseInt(prompt("Indica el número de plantas del nuevo edificio:"));
        let nuevaSuperficie = parseInt(prompt("Indica la superficie del nuevo edificio:"));

        let tipoElegido = prompt("Indica el tipo del nuevo edificio:");
        let nuevoEdificio;
        switch(tipoElegido.toLowerCase()){
            case "cinema":
                nuevoEdificio = new Cinema(
                    nuevoNombreEdificio,
                    nuevoNumPlantas,
                    nuevaSuperficie,
                );
                break;
            case "hospital":
                let pacientes = 0;  //Lo dejo vacío pq se va a buscar automaticamente  
                nuevoEdificio = new Hospital(
                    nuevoNombreEdificio,
                    nuevoNumPlantas,
                    nuevaSuperficie,
                    pacientes
                );
                break;
            case "hotel":
                let habitaciones = parseInt(prompt("Indica el número de habitaciones del nuevo hotel:"));
                nuevoEdificio = new Hotel(
                    nuevoNombreEdificio,
                    nuevoNumPlantas,
                    nuevaSuperficie,
                    habitaciones
                );
                break;
        }

        edificios.push(nuevoEdificio);
        document.getElementById('mensaje').innerHTML = nuevoEdificio.toString();
        
        console.table(edificios);
        
    } else {
        alert("Ya existe un edificio con este nombre.");
    }
}

function eliminarEdificio (){
    let edificioBuscado = prompt("Indica nombre del edificio a eliminar:");
    let index = edificios.findIndex(edificio => edificio.getNombre() === edificioBuscado);
    
    if (index === -1) { // Si no existe ya
        alert("Nombre no válido.");
    } else {
        edificios.splice(index, 1);
        alert(`Edificio de nombre ${edificioBuscado} borrado.`);
        
        console.table(edificios);
        
    }
}
