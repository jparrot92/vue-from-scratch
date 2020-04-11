Vue.component('computed-properties', {
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
  template: `
    <div>
      <h2>Computed properties</h2>
      <p>{{ fullName }}</p>
    </div>
  `
});