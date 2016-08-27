console.log("loader.js loaded!")

var Acme = (function(acme){
  var categories
  var types
  var products

  storeShelf = $(".container")
  storeShelf.prepend(
    `<div>
      <select name="" id="">
        <option value="fireworks" name="category">Fireworks</option>
        <option value="demotion" name="category">Demolition</option>
      </select>
      <button id="displayProducts">Display Products</button>
    </div>
    `)
  $("#displayProducts").on("click", function(){
    acme.loadItems()
  })

  acme.loadItems = function(){
    Promise.all([
      $.getJSON("categories.json"),
      $.getJSON("types.json"),
      $.getJSON("products.json")
      ])
    .then(function(organizer){
      categories = organizer[0].categories
      types = organizer[1].types
      products = organizer[2].products
      acme.selectCategory(categories, types, products)
    })
  }
  return acme

})(Acme || {});