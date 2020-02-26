const app = new Vue({
    el: "#app",
    data: {
        org: [
            "fiesc", "ciesc", "sesi", "senai", "iel"
        ],
        myLink: 3,
        fontSize: 14,
        carrouselImage: [
            "http://sc.senai.br/sites/default/files/campaigns-images/Banner%20Site%201366x382_0.png",
            "http://sc.senai.br/sites/default/files/campaigns-images/Banner%20Site%201366x382_2.png",
            "http://sc.senai.br/sites/default/files/campaigns-images/Banner%20Site%201366x382_1.png",
            "http://sc.senai.br/sites/default/files/campaigns-images/banner%20POS%20site%20cursos-01.jpg",
            "http://sc.senai.br/sites/default/files/campaigns-images/Banner%20Curta%20Dura%C3%A7%C3%A3o.png"
        ],
        imageCarrouselID: 0
    },
    mounted(){
        document.title = `Página Inicial - ${this.org[this.myLink].toUpperCase()}`
        this.carrousel()
    },
    methods:{
        font(a){
            if(a === 0){
                if(this.fontSize <= 30){
                this.fontSize++
                }
            } else{
                if(this.fontSize >= 5){
                this.fontSize--
                }
            }
        },
        carrousel(){
            setInterval(() => {
                if(this.imageCarrouselID < this.carrouselImage.length - 1){
                    this.imageCarrouselID++
                } else{
                    this.imageCarrouselID = 0
                }
                
            }, 6000);
        },
        acessar(id){
            this.myLink = id
            document.title = `Página Inicial - ${this.org[id].toUpperCase()}`
        },
        ca(onde){
            if(onde === 1){
            if(this.imageCarrouselID < this.carrouselImage.length - 1){
                this.imageCarrouselID++
            } else{
                this.imageCarrouselID = 0
            }
        } else{
            if(this.imageCarrouselID > 0){
                this.imageCarrouselID--
            }
        }
        }
    }
})