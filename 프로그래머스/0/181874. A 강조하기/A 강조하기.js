function solution(myString) {
    let answer = myString.split('').map(str => {
        if (['A', 'a'].includes(str)) {
            return str.toUpperCase();
        }
        return str.toLowerCase();
    });
    return answer.join('');
}