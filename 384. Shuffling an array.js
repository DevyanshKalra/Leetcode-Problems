//shuffling an array

let cards=["A","2","3","4","5","6","7","8","9","10","J","Q"];
function shuffle(array){
    let currentindex=array.length-1;
    let randomindex;
    let temp;
    while (currentindex>=0){
        temp=array[currentindex];
        randomindex=Math.floor(Math.random()*(array.length));
        array[currentindex]=array[randomindex];
        array[randomindex]=temp;
        currentindex-=1
    }
    return array;
}
shuffle(cards);
console.log(cards);