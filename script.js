let words = confirm('Tell me three most important words💚');
let wordOne;

if(words){
     wordOne = prompt('Enter word #1');
    console.log(wordOne);
}

console.log(wordOne);

const COUNT_OF_WORDS = 3;
let finalString = '';


let massenger = confirm('Choose type of tranfromation for"i":uppercase|lowercase|capitalize')
if(massenger){
    for(let i = 1; i <= COUNT_OF_WORDS ; i++){
        let word;
        let typeWord;

        while(!word){
            word = prompt(`word#${i}`)
            for(let i = 0; i <= word.length ; i++){
                if(!isNaN(word[i])){
                    word = '';
                }
            }
        }
    
        while(!typeWord){
            typeWord =  prompt('type of word: uppercase / lowercase / capitalize')
           switch(typeWord){
            case('uppercase'):
                word = word.toUpperCase()
                break;
            case('lowercase'):
               word =  word.toLowerCase()
               break;
            case('capitalize'):
               word = word.toLowerCase()
              break;
            default:
                 typeWord = null;
        }
    }
    i === COUNT_OF_WORDS ? finalString += word + '!' : finalString += word + ' ';
}
    console.log(finalString)
}
