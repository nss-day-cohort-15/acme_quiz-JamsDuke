console.log("loader.js loaded!")

var Acme = (function(acme){

  var categories;
  var types;
  var products;

  storeShelf = $(".container")
  storeShelf.prepend(
    `
    <div>
      <select name="categoryOption" id="userSelectValue">
        <option value="fireworks" name="category">Fireworks</option>
        <option value="demolition" name="category">Demolition</option>
      </select>
      <button id="displayButton">Display Products</button>
    </div>
    `)

    $("#displayButton").on("click", function(){
      acme.loadItems()
    })

    acme.loadItems = function(){
    Promise.all([
        $.getJSON('categories.json'),
        $.getJSON('types.json'),
        $.getJSON('products.json')
        ])
    .then(function(data){
        categories = data[0].categories
        types = data[1].types
        products = data[2].products[0]
        acme.selectCategory(categories, types, products)
    })
    }
    return acme
})(Acme || {})