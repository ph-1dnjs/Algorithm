function solution(s) {
    let sortArr = s.split(' ');
    
    for (let i = 0; i < sortArr.length; i++) {
        for (let j = i + 1; j < sortArr.length; j++) {
            if ((sortArr[i] * 1) > (sortArr[j] * 1)) {
                let temp = sortArr[i];
                sortArr[i] = sortArr[j];
                sortArr[j] = temp;
            }
        }
    }
    
    
    return `${sortArr[0]} ${sortArr[sortArr.length - 1]}`;
}