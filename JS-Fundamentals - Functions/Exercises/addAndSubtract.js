function charInrange(char1,char2) {


    let start = Math.min(char1.charCodeAt(0),char2.charCodeAt(0));
    let end = Math.max(char2.charCodeAt(0),char1.charCodeAt(0));
    let charsinrangarr = []; 

    for (let i = start+1; i < end; i++) {

        charsinrangarr.push(String.fromCharCode(i));

    }
    
    console.log(charsinrangarr.join(" "))
}
charInrange(`a`,`d`)