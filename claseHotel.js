// Clase Hotel
class Hotel extends Edificio {
    constructor(nombreEdificio, numPlantas, superficie, habitaciones) {
        super (nombreEdificio, numPlantas, superficie);
        this.habitaciones = habitaciones;
    }
    
    servicio(){
        let empleadosServ = Math.ceil(this.habitaciones / 20); //redondear
        return {
            empleadosServ: empleadosServ,
            salariosServ: empleadosServ * 1000
        };
    }

    // No olvidar vigilancia...
    calcCostVigilancia() {
        let personalVigi = super.calcCostVigilancia();
        let costeVigi = personalVigi * 1700;
        return costeVigi;
    }
    toString(){
        let servicio = this.servicio();
        let mostrar = super.toString();
        mostrar += `<br> Número de habitaciones: ${this.habitaciones}`;
        mostrar += `<br> Miembros de servicio: ${servicio.empleadosServ} <br> Salarios mensuales de servicio: ${servicio.salariosServ}€`
        mostrar += `<br> Coste de vigilancia: ${this.calcCostVigilancia()}€`
        return mostrar;
    }
}