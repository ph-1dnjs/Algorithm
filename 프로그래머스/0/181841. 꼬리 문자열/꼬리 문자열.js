function solution(str_list, ex) {
    const answer = str_list.filter(str => str.indexOf(ex) < 0);
    return answer.join('');
}