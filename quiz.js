console.log("quiz.js loaded!")

var Acme = (function(acme){

  // Select Category
  acme.selectCategory = function (categories, types, products){
    var userSelect = $("#categoryBar").val()
    if (userSelect === "fireworks"){
      acme.fireworksSelected(categories, types, products)
    }
    if (userSelect === "demolition"){
      acme.demolitionSelected(categories, types, products)
    }
  },

  // Send items to DOM
  acme.displayItems = function(categories, types, products){
    output = $("#selectionOutput")
    output.html("")

    products.forEach(function(product){
      output.append(
        `
        <div>
          <h2>Test</h2>
          <h3>Test</h3>
        </div>
        `)
    })
  }

  return acme

})(Acme || {});