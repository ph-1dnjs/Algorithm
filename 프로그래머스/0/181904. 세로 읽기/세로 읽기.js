function solution(my_string, m, c) {
    my_string = my_string.split('');
    
    let answer = '';

    for (let i = c - 1; i < my_string.length; i += m) {
        answer += my_string[i];
    }
    
    return answer;
}