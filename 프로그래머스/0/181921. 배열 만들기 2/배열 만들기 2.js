function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++) {
        const arr = i.toString().split('');
        const check = arr.filter(j => ['0', '5'].includes(j));
        if(arr.length == check.length) {
            answer.push(i);
        }
    }
    return answer.length > 0 ? answer : [-1];
}