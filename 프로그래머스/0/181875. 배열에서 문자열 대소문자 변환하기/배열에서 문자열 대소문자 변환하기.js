function solution(strArr) {
    const answer = strArr.map((str, idx) => {
        if (idx % 2 === 0) {
            return str.toLowerCase();
        }
        return str.toUpperCase();
    });
    return answer;
}