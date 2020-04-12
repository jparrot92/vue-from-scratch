Vue.component('emit', {
  data () {
    return {
      carBrand: 'Toyota'
    }
  },
  template: `
    <div>
      <h2>Emitir eventos con Vuejs</h2>
      <p @click="$emit('show-car-brand', carBrand)">
        Pulsa aquí para emitir un evento a la instancia ROOR de Vuejs
      </p>
    </div>
  `
});