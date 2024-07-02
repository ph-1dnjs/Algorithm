function solution(arr, n) {
    if(isEven(arr.length)) {
        return arr.map((i, idx) => isEven(idx) ? i : i + n)
    } 
    return arr.map((i, idx) => isEven(idx) ? i + n : i)
}

function isEven(n) {
    return n % 2 === 0;
}