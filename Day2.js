const flatarr = [1,2,3,[4,5,[6,7]]];
function flatArr(arr) {
    let res = arr.flat(Infinity);
    return res;
}

console.log(flatArr(flatarr));

// ----------------------------------------------
const sortarr = [4,6,3,4,6,7,8];
function sortArr(arr) {
    let res  = arr.sort();
    return res;
}
    
    console.log(sortArr(sortarr));

// -----------------------------------------------
const arr = [4,6,3,4,6,7,8];
function sortArr(arr) {
    let res  = arr.sort((a,b)=> b-a);
    return res;
}
    
    console.log(sortArr(arr));
// -------------------------------------------------

const str1 = "Hello my name is navyaa";
function longWord(str) {
    let strSplit = str.split(" ");
    let longestWord = "";
    let maxLen = 0;
    console.log(strSplit);
    for(let word of strSplit){
        if(word.length>maxLen){
            maxLen = word.length;
            longestWord = word;
        }
    }

    console.log(longestWord);
}
longWord(str1);

// -------------------------------------------------
const str = "Hello my name is navyaa";
function capitalLetter(str) {
    let strSplit = str.split(" ");
    let capLetters = [];
    console.log(strSplit);
    for(let word of strSplit){
        if (word.length > 0) {
            let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            capLetters.push(capitalizedWord);
        }
    }

     return capLetters.join(" ");
}
console.log(capitalLetter(str)); 