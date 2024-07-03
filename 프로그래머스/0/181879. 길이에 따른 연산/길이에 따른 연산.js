function solution(num_list) {
    let answer = 0;
    if (num_list.length >= 11) {
        num_list.forEach(num => answer += num);
    } else {
        num_list.forEach((num, idx) => {
            if(idx === 0) {
                answer = num;
            } else {
                answer *= num;
            }
        });
    }
    return answer;
}