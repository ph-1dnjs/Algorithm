function solution(ineq, eq, n, m) {
    let answer = false;
    
    switch(ineq) {
        case '<': answer = n < m ? 1 : 0;
            break;
        case '>': answer = n > m ? 1 : 0;
            break;
    }
    
    if(eq === "=" && !answer) {
        answer = n === m ? 1 : 0;
    }
    
    return answer ? 1 : 0;
}