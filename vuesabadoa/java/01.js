
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Programa para el supermercado',
        //frutas: ["Mangos", "Manzanas", "Peras", "Bananos"]
        frutas: [
            { Producto: "mangos", Cantidad: 50 },
            { Producto: "Manzanas", Cantidad: 100 },
            { Producto: "Bananos", Cantidad: 0 },
            { Producto: "Uvas", Cantidad: 80 },
            { Producto: "Peras", Cantidad: 60 },
            { Producto: "Kiwi", Cantidad: 99},
            { Producto: "Zapote", Cantidad: 100},
        ],
        nuevasfrutas: '',
        total: 0
    },
    methods: {
        agregarfrutas() {
            this.frutas.push({
                Producto: this.nuevasfrutas, Cantidad: this.nuevacantidad
            }),
                this.nuevasfrutas = ''
            this.nuevacantidad = ''
        },

        agregarotra() {

        }
    },

    computed: {
        sumarfrutas() {
            this.total = 0;
            for (fruta of this.frutas) {
                this.total = this.total + fruta.Cantidad
            }
            return this.total;
        }
    }

})
