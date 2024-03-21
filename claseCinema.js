// Clase Cinema
class Cinema extends Edificio {
    constructor(nombreEdificio, numPlantas, superficie) {
        super (nombreEdificio, numPlantas, superficie);
    }
 
    proyectarSesion() {
        let precioEntrada = parseInt(prompt("Indica el precio de una entrada: "));
        let asistentes = parseInt(prompt("Indica el número de asistentes: "));
        let maxAforo = parseInt(prompt("Indica el aforo máximo del cine: "));
        while (asistentes > maxAforo){
            asistentes = prompt("Número de asistentes no puede superar aforo máximo.\nIndica el número de asistentes: ")
        } 
        let recaudacion = (asistentes * precioEntrada).toFixed(2);
        alert(`Se han recaudado ${recaudacion}€.`)
        return recaudacion;
    }

    // No olvidar vigilancia...
    calcCostVigilancia() {
        let personalVigi = Math.ceil(super.calcCostVigilancia()/3);
        let costeVigi = personalVigi * 1300;
        return costeVigi;
    }
    toString(){
        let mostrar = super.toString();
        mostrar += `<br> Recaudacion: ${this.proyectarSesion()}€`;
        mostrar += `<br> Coste de vigilancia: ${this.calcCostVigilancia()}€`
        return mostrar;
    }
}