class Edificio {
    #nombreEdificio;
    #numPlantas;
    #superficie;
    
    constructor(nombreEdificio, numPlantas, superficie) {
        this.#nombreEdificio = nombreEdificio;
        this.#numPlantas = numPlantas; 
        this.#superficie = superficie;
    }

        getNombre() {return this.#nombreEdificio;}
        getNumPlantas() {return this.#numPlantas;}
        getSuperficie() {return this.#superficie;}


    limpieza(){
        let parteArea = Math.ceil(this.#superficie / 5);             
        // redondear hacia arriba
        let partePlantas = Math.ceil(this.#numPlantas *0.5 - 0.5);
        let tiempoLimp = parteArea + partePlantas;
        return {
            tiempoLimp: tiempoLimp,
            costeLimp: tiempoLimp * 60 * 30
        };
    }

    calcCostVigilancia() {
        let personalVigi = Math.ceil(this.#superficie /1000);
        return personalVigi;
    }
    
    toString(){
        let limpieza = this.limpieza();
        let mostrar = ` Nombre del edificio: ${this.#nombreEdificio}<br> Plantas: ${this.#numPlantas}<br> Superficie: ${this.#superficie} m²`
        mostrar += `<br> Tiempo de limpieza: ${limpieza.tiempoLimp} minutos <br> Coste mensual de limpieza: ${limpieza.costeLimp}€`; // Igual para todos
        return mostrar;
    }   
}