function solution(numbers) {
    const numberStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let str = '';
    let answer = '';
    for(let i = 0; i < numbers.length; i++) {
        str += numbers[i];
        if(numberStr.includes(str)) {
            numberStr.forEach((number, idx) => {
                if(number === str) {
                    answer += idx;
                    str = '';
                }
            });
        }
    }
    return Number(answer);
}