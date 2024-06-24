function sum(a, b) {
    if (!Number.isInteger(a) && !Number.isInteger(b)) {
        let res = a + b;
        console.log(res);
    }
    else {
        console.log("One of the Param is an integer");
    }
}

sum(2.2, 3);

// --------------------------------------------------------------
function factorial(num) {
    if (num === 0) return 1;
    if (num < 0) return undefined;
    return num * factorial(num - 1);
}
console.log(factorial(3));
// --------------------------------------------------------------
function reverseStr(params) {
    let origstr = params;
    let split = origstr.split('');
    let rev = split.reverse();
    let joinstr = rev.join('');
    if (origstr === joinstr) {
        return "Palindrome";
    }
    else {
        return "Not a Palindrome";
    }
}

console.log(reverseStr('navya'));
// -----------------------------------------------------------------

function largestNum(num) {
    let highNum = 0;
    for (let i = 0; i < num.length; i++) {

        if (highNum < num[i]) {
            highNum = num[i];
        }
    }
    return highNum;
}

console.log(largestNum([1, 2, 6, 3]));
// ------------------------------------------------------------------
function uniqueArray(params) {
    let setArr = new Set(params);
    let res = [...setArr]
    return res;
}

console.log(uniqueArray([1, 1, 2, 2, 3, 4, 5, 5]));
// -------------------------------------------------------------------
let person = {
    name: 'navya',
    age: 25,
    gender: 'female',
    address: {
        city: 'charolette',
        state: 'NC'
    }
}


let copy = JSON.stringify(person);
let deepCopy = JSON.parse(copy);
let res = deepCopy;
res.address.state = 'texas';
console.log(person);
console.log(deepCopy);
// ------------------------------------------------------------------
let personDetails = {
    name: 'navya',
    age: 25,
    gender: 'female',
    address: {
        city: 'charolette',
        state: 'NC'
    }
}


const structuralDeepCopy = structuredClone(personDetails);
structuralDeepCopy.address.state = 'texas';
console.log(personDetails);
console.log(structuralDeepCopy);
// ------------------------------------------------------------------
function fetchCall() {
    fetch('https://reqres.in/api/users?page=2')
        .then((res) => {
            console.log(res.json());
        })
        .then((data) => {
            console.log(data);
        });

}

fetchCall();
// -----------------------------------------------------------------
function areaCir(params) {
    const pi = 3.14;
    let rad = params * params;
    let res = pi * rad;
    return res;
}

console.log(areaCir(5));
// ------------------------------------------------------------------
function strCount(params) {
    let splitArr = params.split(' ');
    let res = splitArr.length;
    return res;
}

console.log(strCount("navya Tagore Hello"));
// -------------------------------------------------------------------

