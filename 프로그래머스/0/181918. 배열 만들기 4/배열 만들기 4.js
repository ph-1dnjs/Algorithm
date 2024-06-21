function solution(arr) {
    const stk = [];
    let i = 0; 
    while (i < arr.length) {
        const len = stk.length;
        if (len <= 0 || stk[len-1] < arr[i]) {
            stk.push(arr[i]);
           i++;
        } else if (stk[len-1] >= arr[i]) {
            stk.pop();
        }
    }
    return stk;
}