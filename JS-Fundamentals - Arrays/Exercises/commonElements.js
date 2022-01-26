function commonElements (arrayOne, arrayTwo){

    for(let k = 0; k < arrayOne.length; k++){
        for(let i=0; i<arrayTwo.length; i++){
        if(arrayOne[k] === arrayTwo[i]){    
                console.log(arrayOne[k]);
            }
        else{
            false;
        }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])