function solution(my_string) {
    const answer = my_string.split(' ');
    return answer.filter(str => str.length > 0);
}