function solution(myString, pat) {
    const answer = myString.split('').reverse().join('').indexOf(pat.split('').reverse().join(''));
    
    return myString.slice(0, myString.length - answer);
}
