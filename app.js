new Vue({
  el: '#app',
  data: {
    createArray: ["Pan superior", "Pan inferior", "Mortadella", "Lechuga", "Tomate", "Salsa Secreta"],
    selectedIngredients: [],
    pasoPaso: ["Pan superior", "Pan inferior", "Mortadella", "Lechuga", "Tomate", "Salsa Secreta"],
    showBurger: false,
    showMessage: false,
  },
  methods: {
    prepareBurger() {
      if (this.selectedIngredients.toString() === this.pasoPaso.toString()) {
        this.showBurger = true;
      } else {
        this.showMessage = true;
      }
    },
  },
});
