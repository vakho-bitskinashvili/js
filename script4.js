var nums = [10, 15,16, 222];
function maxNum(arr){
    // console.log(Math.max(...arr));
    var max = 0;
    for(var num of arr){
        if(num > max){
            max = num;
        }
    }
    console.log(max);
}

maxNum(nums);