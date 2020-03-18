Task

Complete the vowelsAndConsonants function in the editor below. It has one parameter, a string, , consisting of lowercase English alphabetic letters (i.e., a through z). The function must do the following:

1. First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
2. Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .



function vowelsAndConsonants(s) {
     let vowels = ["a", "e", "i", "o", "u"];

    for(let v of s) {
        if(vowels.includes(v))
            console.log(v);
    }
    
    for(let v of s) {
        if(!vowels.includes(v))
            console.log(v);
    }        
}
