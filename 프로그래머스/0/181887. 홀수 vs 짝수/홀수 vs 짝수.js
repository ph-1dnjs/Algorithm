function solution(num_list) {
    let sum1 = 0, sum2 = 0;
    num_list.forEach((num, idx) => {
        if(idx % 2 !== 0) {
            sum1 += num;
        } else {
            sum2 += num;
        }
    })
    return sum1 > sum2 ? sum1 : sum2;
}