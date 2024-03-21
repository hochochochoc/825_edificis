// Clase Hospital
class Hospital extends Edificio {
    #pacientes

    constructor(nombreEdificio, numPlantas, superficie, pacientes) {
        super (nombreEdificio, numPlantas, superficie);
        this.#pacientes = pacientes;
    }

    getPacientes() {return this.#pacientes}
    setPacientes(pacientes) {this.#pacientes = pacientes}

    repartirComida(){
        // opción de cambiarlo
        let nuevosPacientes = prompt("Nuevo número de pacientes: ");
        this.setPacientes(nuevosPacientes);
        alert(`Se reparten ${this.getPacientes() * 3} raciones diarias.`)
        return this.getPacientes() * 3;
    }

    // No olvidar vigilancia...
    calcCostVigilancia() {
        let personalVigi = super.calcCostVigilancia();
        let costeVigi = personalVigi * 1300;
        return costeVigi;
    }
    toString(){
        let mostrar = super.toString();
        mostrar += `<br> Raciones diarias: ${this.repartirComida()}`;
        mostrar += `<br> Coste de vigilancia: ${this.calcCostVigilancia()}€`
        return mostrar;
    }
}
