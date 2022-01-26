function maxNum (arr){
    let topInteger =[];
    for(let i=0;i<arr.length;i++){
        let currElement = arr[i];
        let isTopInteger = true;
        for(let j=i+1;j<arr.length;j++){
            let nextElement = arr[j];
            if(currElement<=nextElement){
                isTopInteger = false;
                break;
            }
        }
    if(isTopInteger){
        topInteger.push(currElement);
    }
    }
    console.log(topInteger.join(' '));
}
maxNum([1,4,3,2])