//Javascript for slding Cart menu begins here
function cartOpen() 
{
    document.getElementById("MenuPage").style.width = "100%";
   document.getElementById("HomePage").style.width = "0";
  }
  
  
  function cartClose()
   {
    document.getElementById("MenuPage").style.width = "0";
    document.getElementById("HomePage").style.width = "100%";
  }

  //JavaScript for Cart Functionality begins here
  let carts = document.querySelectorAll('.addToCart');
  let products = document.querySelectorAll('.product');
  let images = document.querySelectorAll('.image');
  let prices = document.querySelectorAll('.price');
  let quantity= [];
  for( let i=0;i<carts.length;i++)
  quantity.push(0);
  for( let i=0;i<carts.length;i++)
  {
    carts[i].addEventListener('click',() =>{
    printCart(i);
    
  })}
  //function to get the product from HomePage to my CartPage
  function printCart(i)
  { //Checking whether product is already in cartpage or not
    if(quantity[i]==0)
    {
      quantity[i]++;
    let cartItemContainer = document.querySelector(".cartItemContainer");
     let imgsrc = images[i].src;
     let prc= prices[i].innerHTML;
    cartItemContainer.innerHTML +=
    `
    <div class ="cartItemsOuter" id="containerNo${i}">
    <div class = "cartItems" >
    <img src="${imgsrc}" style="width: 172px;height: 187px; ">
    <h3> Price=${prc}</h3>
    

    <div>
    <button style="width: 70px;height: 38px; background-color:rgba(99, 87, 87, 1)" onclick="decrease(${i})" class="modify"><i class="fa fa-sort-up"></i></button>
    <h3 class="quantity" id="itemNo${i}" style="background-color:white;"> ${quantity[i]}</h3>
    <button style="width: 70px;height: 38px; background-color:rgba(99, 87, 87, 1)" onclick="increase(${i})" class="modify"><i class="fa fa-sort-down"></i></button>
    </div>
    <button style="width: 70px;height: 38px; background-color:rgba(99, 87, 87, 1);border:10px;border-radius:30px 5px 5px 30px;" onclick="vanish(${i})"><i class="fa fa-window-close"></i></button>
    </div>
    
    </div>
    `
    total();
  }
  else
  increase(i);
}
//functions to edit the quantity in cart page and at the same time deleting the product if quantity becomes 0
function decrease(i){
  if(quantity[i]==1)
  vanish(i);
 
  else if(quantity[i]!=0)
  {
  quantity[i]--;
  let idNo= "itemNo"+i;
  document.getElementById(idNo).innerHTML = quantity[i];
  total();
  }
  
}
function increase(i){
  quantity[i]++;
  let idNo= "itemNo"+i;
  document.getElementById(idNo).innerHTML = quantity[i];
  total();
}
//function to modify total
function total()
{ var t=0.0;
  for( let i=0;i<carts.length;i++)
  {
    var p=  parseFloat(prices[i].innerHTML.replace("₹",""));
    t=t+p*quantity[i];
  } 
  let sum="Total =₹"+t;
    document.getElementById("sum").innerHTML= sum;

    
   
}
//function to show the greeting message
function buy()
{
  alert("Thank You For shopping at Fashion.com. Do visit us again")
}
//function to delete product from cart page
function vanish(i)
{
  quantity[i]=0;
  total();
  let idNo="containerNo"+i;
  document.getElementById(idNo).remove();

}