function solution(num_list, n) {
    const answer = [[]];
    let idx = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        answer[idx].push(num_list[i]);

        if (answer[idx].length === n && idx + 1 < num_list.length / n) {
            answer.push([]);
            idx++;
        }
    }
    
    return answer;
}