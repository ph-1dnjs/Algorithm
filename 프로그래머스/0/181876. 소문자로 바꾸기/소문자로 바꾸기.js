function solution(myString) {
    const answer = myString.split('').map(str => str.toLowerCase());
    return answer.join('');
}