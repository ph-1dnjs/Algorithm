function solution(num_list) {
    let multi, sum = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        sum += num_list[i];
        multi = i === 0 ? num_list[i] : multi * num_list[i];
    }

    return multi < (sum * sum) ? 1 : 0;
}