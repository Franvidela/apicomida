<template>
  <div class="home">


  <b-container class="bv-example-row">
  <b-row>
    <b-col>
              <input type="text" v-model="mensaje" placeholder="ingrese valor">
    </b-col>




    <b-col>

          <div>
              <b-button-toolbar key-nav aria-label="Toolbar with button groups">
                <b-button-group class="mx-1">
                  <b-button v-on:click="mostrarvalor">a</b-button>
                  <b-button>b</b-button>
                  <b-button v-on:click="mostraralmacen">c</b-button>
                  <b-button>d</b-button>
                  <b-button v-on:click="recorreralmacen">e</b-button>
                  <b-button>f</b-button>
                  <b-button v-on:click="cambiarmensaje('ADIOS A TODOS')">g</b-button>
                  <b-button>h</b-button>
                  <b-button>i</b-button>
                  <b-button>j</b-button>
                  <b-button>k</b-button>
                  <b-button>l</b-button>
                  <b-button>m</b-button>
                  <b-button>n</b-button>
                  <b-button>o</b-button>
                  <b-button>p</b-button>
                  <b-button>q</b-button>
                  <b-button>r</b-button>
                  <b-button>s</b-button>
                  <b-button>t</b-button>
                  <b-button>u</b-button>
                  <b-button>v</b-button>
                  <b-button>w</b-button>
                  <b-button>x</b-button>
                  <b-button>y</b-button>
                  <b-button>z</b-button>

                </b-button-group>
              </b-button-toolbar>
          </div>



    </b-col>



    <b-col>
            {{ mensaje }}
    </b-col>




  </b-row>
</b-container>




    <DatosComidas v-bind:msg="mensaje" otroprop="cualquier mensaje"/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// @ is an alias to /src
import DatosComidas from '@/components/DatosComidas.vue'

export default {
  name: 'HomeView',
  components: {
    DatosComidas
  },
  data:()=>{
    return{
        mensaje:'',
    }
  },
  methods:{
      ...mapActions(["cambiarmensaje"]),
      mostrarvalor(){
       console.log('El valor de la propiedad mensaje es: ' +  this.mensaje);
      },
      mostraralmacen(){
        console.log('El valor de unmensaje en el almacen es: ' + this.unmensaje);
      },
      recorreralmacen(){
          for(let dato of this.unosdatos){
              console.log(dato);
          }
      }
  },
  computed:{
      ...mapState(["unmensaje", "unosdatos"]),
  },



}
</script>
