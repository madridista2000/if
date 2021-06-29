function decimalToBinary(number) {
    let result = '';
    while(number > 0){
        result += number % 2;
     number = Math.floor(number/2)
       }
       let revres = ''
       for(let i = result.length-1; i >= 0; i--) {
        revres += result[i]
    }
console.log(typeof(revres),revres);
    
    return revres

}
decimalToBinary(13)





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



