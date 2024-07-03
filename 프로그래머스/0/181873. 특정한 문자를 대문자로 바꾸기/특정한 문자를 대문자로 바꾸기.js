function solution(my_string, alp) {
    const answer = my_string.split('').map(str => {
        if (str === alp) {
            return str.toUpperCase();
        }
        return str;
    });
    return answer.join('');
}