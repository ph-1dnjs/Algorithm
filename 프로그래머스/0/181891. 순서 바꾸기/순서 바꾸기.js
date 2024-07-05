function solution(num_list, n) {
    let answer = [];
    for (let i = n; answer.length < num_list.length; i++) {
        if (i >= num_list.length) {
            i = 0;
        }
        answer.push(num_list[i]);
    }
    return answer;
}