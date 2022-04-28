let array = [12, 'google', 32, null, 'yahoo', 25];

let newArray=array.map(function(item){
    
    if(!isNaN(item )&&item!=null) {
         
        console.log( item*2);
    }
    else if (isNaN(item )){

      console.log(item.toUpperCase());
    }
    else{
        console.log(null);
    }
})



