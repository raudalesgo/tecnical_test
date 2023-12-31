// Julian Estefan14:08
// Look-and-Say Sequence

// Find the n’th term in Look-and-say (Or Count and Say) Sequence. The look-and-say sequence is the sequence of the below integers:
// 1, 11, 21, 1211, 111221, 312211, 13112221, 1113213211, …

// The first term is "1"
// Second term is "11", generated by reading first term as "One 1"
// (There is one 1 in previous term)
// Third term is "21", generated by reading second term as "Two 1"
// Fourth term is "1211", generated by reading third term as "One 2 One 1"
// and so on
// How to find n’th term?

// Example:

// Input: n = 3
// Output: 21
// Input: n = 5
// Output: 111221

//


function looksay(n){
    
    let init = "1";

    for (let i = 1; i < n; i++) {

        let nextTerm = "";
        let count = 1;

        for(let j = 1; j < init.length; j++) {
            if(init[j] === init[j -1]){
                count++;
            }else{
                nextTerm += count + init[j-1];
                count = 1;
            }

        }

        nextTerm += count + init[init.length -1];
        init = nextTerm;

    }
    return init;
}

console.log(looksay(3));
console.log(looksay(5));
console.log(looksay(10));





