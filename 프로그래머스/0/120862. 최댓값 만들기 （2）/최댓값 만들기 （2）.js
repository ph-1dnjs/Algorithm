function solution(numbers) {
    let max = null;
    
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if(i !== j) {
                if(max === null){
                    max = numbers[i] * numbers[j];
                } else if (max < numbers[i] * numbers[j]) {
                    max = numbers[i] * numbers[j];
                }
            }
        }
    }
    
    return max;
}