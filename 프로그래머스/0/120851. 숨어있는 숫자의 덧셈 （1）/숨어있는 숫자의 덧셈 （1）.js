function solution(my_string) {
    let sum = 0;
    my_string.split('').forEach(str => {
        const num = Number(str);
        if(num) {
            sum += num;
        }
    })
    return sum;
}