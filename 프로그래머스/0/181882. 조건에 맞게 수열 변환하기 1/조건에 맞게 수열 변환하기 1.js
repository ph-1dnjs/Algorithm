function solution(arr) {
    arr.forEach((a, idx) => {
        if (a >=50 && a % 2 === 0) {
            arr[idx] /= 2;
        } else if (a < 50 && a % 2 !== 0) {
            arr[idx] *= 2;
        }
    })
    return arr;
}