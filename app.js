(function(){

angular.module("ShoppingListCheckOff",[])
.controller("ToBuyController",ToBuyController)
.controller("AlreadyBoughtController",AlreadyBoughtController)
.service("ShoppingListCheckOffService",ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyCtrl = this;
  toBuyCtrl.getAllItemsToBuy = ShoppingListCheckOffService.getAllItemsToBuy();
  toBuyCtrl.markBought = function(ind)
    {
    ShoppingListCheckOffService.markBought(ind);
    }
  toBuyCtrl.allItemsBought = function() { 
      return ShoppingListCheckOffService.allItemsBought();
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtCtrl = this;

  boughtCtrl.getAllBoughtItems = ShoppingListCheckOffService.getAllBoughtItems();

    boughtCtrl.nothingBought = function() { 
      return ShoppingListCheckOffService.nothingBought();}
}

function ShoppingListCheckOffService(){

var shoppingList = this;

shoppingList.itemsToBuy = [
	{name:"Milk", quantity:"2 bottles"},
	{name:"Cookies", quantity:"2 bags"},
	{name:"Bread", quantity:"5 pieces"},
	{name:"Candies", quantity:"5 bags"},
	{name:"Ice Cream", quantity: "10 bags"},
];

shoppingList.getAllItemsToBuy = function(){
return shoppingList.itemsToBuy;
}

shoppingList.itemsBought = [];

shoppingList.getAllBoughtItems = function(){
return shoppingList.itemsBought;
}

shoppingList.allItemsBought = function() { var result = ( shoppingList.itemsToBuy.length === 0) ? true : false;
return result;
  }


shoppingList.nothingBought = function() { var result = ( shoppingList.itemsBought.length === 0) ? true : false;
return result;
}

shoppingList.markBought = function(index){

var boughtItem = shoppingList.itemsToBuy.splice(index,1)[0];
shoppingList.itemsBought.push(boughtItem);
console.log(shoppingList.allItemsBought());

}
}

})();