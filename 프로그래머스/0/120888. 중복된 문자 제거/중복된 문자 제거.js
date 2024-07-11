function solution(my_string) {
    const answer = [];
    
    my_string.split('').forEach(str => {
        if (!answer.includes(str)) {
            answer.push(str);
        }
    })
    
    return answer.join('');
}