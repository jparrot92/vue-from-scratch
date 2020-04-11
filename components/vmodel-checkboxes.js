Vue.component('vmodel-checkboxes', {
  data () {
    return {
      frameworks: []
    }
  },
  template: `
    <div>
      <h2>vmodel con arrays</h2>
      <input type="checkbox" id="vuejs" value="Vue js" v-model="frameworks"/>
      <lavel for="vuejs">Vuejs</label>
      <input type="checkbox" id="reactjs" value="React js" v-model="frameworks"/>
      <lavel for="reactjs">Reactjs</label>
      <input type="checkbox" id="angular" value="Angular" v-model="frameworks"/>
      <lavel for="angular">Angular</label>
      <p>Frameworks seleccionados: {{ frameworks }}</p>
    </div>
  `
});