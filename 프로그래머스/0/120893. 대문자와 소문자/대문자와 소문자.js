function solution(my_string) {
    const answer = my_string.split('').map((str) => {
        if(str.charCodeAt() < 97) {
            return str.toLowerCase();
        }
        return str.toUpperCase();
    });
    
    return answer.join('')
}