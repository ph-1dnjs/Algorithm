function solution(my_string, indices) {
    let answer = ''
    
    my_string.split('').forEach((str, i) => {
        if (!indices.includes(i)) {
            answer += str;
        }
    })
    
    return answer;
}