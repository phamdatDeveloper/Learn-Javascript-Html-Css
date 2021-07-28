Array.prototype.reduce2 = function(callback,result){
    for(let i = 0 ; i< this.length;i++){
        result = callback(result,this[i],i,this);
    } 
    return result;
 }

 const numbers = [1,2,3,4,5];
 var result = numbers.reduce2((total, number)=>{
     return total + number;
 },0);
 console.log(result);