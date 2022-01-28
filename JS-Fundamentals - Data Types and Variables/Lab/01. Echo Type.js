function solve(input){

    let [str,char,result] = input
    let res = str.replace('_',char);

    if(result === res){
        console.log("Matched")
    }else{
    
        console.log(`Not Matched`)
    }
}

solve(['Str_ng','i','String']) 