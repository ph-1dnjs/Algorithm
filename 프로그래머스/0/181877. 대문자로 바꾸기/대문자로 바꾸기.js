function solution(myString) {
    const answer = myString.split('').map(str => str.toUpperCase());
    return answer.join('');
}