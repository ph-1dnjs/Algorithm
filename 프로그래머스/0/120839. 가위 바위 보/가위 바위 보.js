function solution(rsp) {
    console.log(rsp.split(''));
    const arr = rsp.split('').map(i => {
        switch(i) {
            case '2': return 0;
            case '0': return 5;
            case '5': return 2;
        }
    })
    return arr.join('');
}