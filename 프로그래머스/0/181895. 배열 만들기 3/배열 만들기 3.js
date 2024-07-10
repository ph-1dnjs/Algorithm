function solution(arr, intervals) {
    const answer = [];
    intervals.forEach(i => {
        answer.push(...arr.slice(i[0], i[1] + 1));
    })
    return answer;
}