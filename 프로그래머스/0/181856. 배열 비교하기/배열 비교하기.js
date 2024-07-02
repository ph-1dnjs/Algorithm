function solution(arr1, arr2) {
    const res = answer(arr1.length, arr2.length);

    if(res) {
        return res;
    }
    
    return answer(sum(arr1), sum(arr2));
}

function sum(arr) {
    let sum = 0;
    arr.forEach(i => sum += i);
    return sum;
}

function answer(n1, n2) {
    if(n1 > n2) {
        return 1;
    } else if (n1 < n2) {
        return -1;
    } else if (n1 === n2) {
        return 0;
    }
    return null;
}