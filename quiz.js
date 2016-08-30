console.log("quiz.js loaded!")

var Acme = (function(acme){

  //Select category to display
  acme.selectCategory = function(categories, types, products){

    var userSelect = $("#userSelectValue").val()

    if (userSelect === "fireworks"){
      acme.fireworksSelected(categories, types, products)
    }
    if (userSelect === "demolition"){
      acme.demolitionSelected(categories, types, products)
    }
  },

  // Send items to DOM
  acme.displayItems = function(categories, types, products){
    outputEl = $("#storefront")
    outputEl.html("")

    products.forEach(function(product){
      outputEl.append(
        `
        <div class="col-md-4 itemCard">
        <h2>${product.name}</h2>
        <h3>${product.description}</h3>
        <h4>Located in the <span>${types[product.type].name}</span> section of the
        <span>${categories[types[product.type].category].name}</span> department</h4>
        </div>
        `)
    })
  }
  return acme
})(Acme || {})