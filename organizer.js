console.log("organizer.js loaded!")

var Acme = (function(acme){
  acme.fireworksSelected = function (categories, types, products) {
    var fireworksArray = []
    for (key in products) {
      if (products[key].type >= 0 && products[key].type < 3) {
        fireworksArray.push(products[key])
      }
    }
    acme.displayItems(categories, types, fireworksArray)
  },

  acme.demolitionSelected = function (categories, types, products) {
    var demolitionArray = []
    for (key in products) {
      if (products[key].type >= 3 && products[key].type < 6) {
        demolitionArray.push(products[key])
      }
    }
    acme.displayItems(categories, types, demolitionArray)
  }

  return acme
})(Acme || {})