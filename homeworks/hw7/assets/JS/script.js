function averageThreeNumbers(a, b, c) {
    let sum = a+b+c;
    let avg = sum/3;
    return avg;
}


 
function createSentence(num, noun) {
    return  "on average, a house has "+ num+ " " + noun ;
}

function getRandomNum(max, min){
    let random= (Math.random() * max);
    return random;
}

let x= getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg= averageThreeNumbers(x, y, z);

let favoriteAnimal = "snake";

let sentence = createSentence(avg, favoriteAnimal);

console.log(sentence);
