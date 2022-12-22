
 function bubbleSort(ar){ 
   for(var i = 0; i < ar.length; i++){
     for(var j = 0; j < ( ar.length - i -1 ); j++){
       if(ar[j] > ar[j+1]){
         var temp = ar[j]
         ar[j] = ar[j + 1]
         ar[j+1] = temp
       }
     }
   }
   console.log(ar);
}

var ar = [234, 43, 55, 63,  5, 6, 235, 547];

bubbleSort(ar);
