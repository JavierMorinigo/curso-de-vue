const myApp = new Vue({
    el:"#myApp",
    data:{
        titulo:"Nueva instancia Mi App - Directiva",
        aparece:true,
        num1:5,
        num2:5,
        frutas:["manzanas","peras","bananas","naranjas","nahomi","nanita"],
        mercaderias:[
            {'id':'001','name':'Manteca'},
            {'id':'002','name':'Arroz'},
            {'id':'003','name':'Porotos'},
        ],
        contador:10,
        numero1:10,
        numero2:20

    },
    methods:{
        saludar:function(){
            alert("saludando desde los metodos de vue.")
        },
        probandoParametros:function(a,b){
            alert(a+b)
            return a+b
        },
   
    incrementContador: function(){
       this.contador = this.contador+10
       return this.contador
    },
    sumarNumeros:function(){
        return parseInt(this.numero1) + parseInt(this.numero2)
    }
 },
})