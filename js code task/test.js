var arr = [1,2,3,4,5];
var sum = 0;
for(let i=0 ; i<arr.length ; i++){
    sum += arr[i];
}
console.log(sum);


var arr1 = [1, 2, 3, 3, 4, 5, 5];
var uniqueArray = Array.from(new Set(arr1));
console.log(uniqueArray); 


var arr2 = [1,2,3];
var arr3  = [4,5];
var concat = [ arr2+ "," +arr3 ];
console.log(concat);


var arr4 = [1,2,3,4];
var arr5 = [3,4,5,6];
var inter = [];
for(let k= 0 ; k<arr4.length ; k++){
    for(let l=0 ; l<arr5.length ; l++){
        if(arr4[k] == arr5[l])
        inter.push(arr[k]);
    }
}
console.log(inter);


var word = 'peace';
var status;
var word1 = word.toLowerCase();
var word2= word.split('').reverse().join('');
console.log(word1);
if(word1 == word2){
    status = 'true';
}
else{
   status = 'false';
}
console.log(status);