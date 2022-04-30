var start = 30;
var stop = 10;
for(var i = start; i >= stop; i-=5){
    if(i % 2 == 0){
        console.log(i * 2);
    } else {
        console.log(i);
    }
}
