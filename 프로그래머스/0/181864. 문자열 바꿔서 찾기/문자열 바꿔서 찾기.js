function solution(myString, pat) {
    const answer = myString.split('').map((str) => str === 'A' ? 'B' : 'A');
    return answer.join('').indexOf(pat) < 0 ? 0 : 1;
}