
function abc(n){
    if(n<1){
        return "sudah";
    }else{
        abc(n-1);
        return n;
    }
    
}

console.log(abc(5));