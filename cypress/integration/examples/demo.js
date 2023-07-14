function stringRev(a) {
    var revStr = "";

    for(i = a.length -1; i >= 0 ; i-- ){

        revStr += a[i];
    
    }
    return revStr;
}
console.log(stringRev('Praveen'))


function findDuplicate(a){
    var dupStr = ''
    let index = 0
    for(i = 0; i < a.length - 1 ; i++ ){
        for(j = i + 1; j < a.length; j++){
            if(a[i] == a[j]){
                dupStr += a[i];
            }
        }
    }
    return dupStr;
}
console.log(findDuplicate('Praveenkumar'))



