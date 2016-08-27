console.log("quiz.js loaded!")

var Acme = (function(acme){

  // Select Category
  acme.selectCategory = function (category, type, product){
    var userSelect = $("#categoryBar").val()
    if (userSelect === "fireworks"){
      acme.fireworksSelected(category, type, product)
    }
    if (userSelect === "demolition"){
      acme.demolitionSelected(category, type, product)
    }
  }

})(Acme);