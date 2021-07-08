   
   const addcart = () => {
    var enter = 0;
    var product = '';
    var sum = 0;
    var range = 0;
    while(product !== "x") {
            product = prompt('enter product').toLowerCase()
            if (product !== "x"){
                range ++;
            enter = prompt('price')
            
            sum += Number(enter)
        }}
        console.log('Shopping Cart: ' + range + ';', 'Order Summary: ' + sum);
   }
   addcart()