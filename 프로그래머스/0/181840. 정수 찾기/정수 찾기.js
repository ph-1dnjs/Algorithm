function solution(num_list, n) {
    const answer = num_list.some(num => num === n);
    return answer ? 1 : 0;
}