function solution(arr, flag) {
    let answer = [];
    
   for (let i = 0; i < arr.length; i++) {
        if (flag[i]) {
            let add = [];
            for (let j = 0; j < arr[i]; j++) {
                add.push(arr[i]);
            }
            answer = [...answer, ...add, ...add];
        } else {
            for (let j = 0; j < arr[i]; j++) {
                answer.pop();
            }
        }
    }
    
    return answer;
}