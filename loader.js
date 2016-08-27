console.log("loader.js loaded!")

var Acme = (function(acme){
  storeShelf = $(".container")
  storeShelf.prepend(
    ``)
  $("#displayProducts").on("click", function(){
    acme.loadJson()
  })

  acme.loadJson = function(){
    Promise.all([
      $.getJSON("categories.json"),
      $.getJSON("types.json"),
      $.getJSON("products.json")
      ])
  }
  return acme

})(Acme);