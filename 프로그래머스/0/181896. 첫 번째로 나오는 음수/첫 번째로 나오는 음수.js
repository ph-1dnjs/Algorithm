function solution(num_list) {
    const index = [];
    num_list.map((num, idx) => {
        if(num < 0) index.push(idx);
    });
    return index[0] ?? -1;
}