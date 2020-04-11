Vue.component('methods', {
  data () {
    return {
      name: 'Jaume',
      surname: 'Parrot'
    }
  },
  computed: {
    fullName() {
      return `${this.name} ${this.surname}`;
    }
  },
  methods: {
    hello () {
      alert(this.fullName);
    }
  },
  template: `
    <div>
      <h2>Ejecutar métodos con Vuejs</h2>
      <p @click="hello">Pulsa aquí para ejecutar el método hello</p>
    </div>
  `
});