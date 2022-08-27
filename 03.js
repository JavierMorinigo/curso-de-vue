const vm = new Vue({
el:"#propiedadesApp",
data:{
    /*aca se multiplica el precio * cantidad */
    precios:[100.2,300,300.5,400.5],
    cantidades:[20,10,40,90],
    productos:[
        "zapatos",
        "camisetas",
        "gorras",
        "lentes",
    ]
},
methods:{
    SumarVentas:function(){
        var total = 0
        for(let i = 0;i < this.precios.length;i++){
            const monto = this.precios[i]*this.cantidades[i]
            /* aca multiplica precios por cantidades y se guarda en monto*/
            total= total + monto
            /*aca se guarda la suma de la multiplicacion. */
        }
        return total /* Aca devuelve el Total de la multiplicacion */
    }
}
})
