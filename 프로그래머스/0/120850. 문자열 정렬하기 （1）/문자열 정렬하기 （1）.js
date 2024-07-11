function solution(my_string) {
    const answer = [];
    
    my_string.split('').forEach(str => {
        if (!isNaN(Number(str))) {
            answer.push(str * 1);
        }
    });
              
    answer.sort(function (a, b) {
        return a - b;
    })
    
    return answer;
}