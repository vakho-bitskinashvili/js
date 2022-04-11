function  sumNumber(...arg){ 
   console.log(arg);
   var sum = 0;
  for( x of arg ){
   if (x>0){
      console.log(x);
     var sum = sum + x ;
      
   }
}
   console.log(sum);
}

sumNumber(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8 );
 