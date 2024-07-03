function solution(myString) {
    const answer = myString.split('').map(str => {
        if(str < 'l') {
            return 'l'
        }
        return str;
    });
    return answer.join('');
}