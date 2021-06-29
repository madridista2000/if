function decimalToBinary(number) {
    return  x = number.toString(2);
    
}
decimalToBinary(13)

console.log(typeof(x), x) 


function binaryToDecmal(binaryString) {
      y = 0
    for(let m = 0; m < binaryString.length; m++) {
        let bin = binaryString
        if(bin[m] > 0) {
           v = bin.length - m -1;
            y += Math.pow(2,v);
           
            
        }
    }
    return y;
}
binaryToDecmal('1101')
console.log(typeof(y) ,y);


let rev = '';

function reverseString(str) {
    
     for(let i = str.length-1; i >= 0; i--) {
         rev += str[i]
     }
     return rev
}
reverseString('digital')
console.log(typeof(rev) ,rev);



