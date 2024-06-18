function solution(n, slicer, num_list) {
    var answer = [];
    switch(n) {
        case 1: return num_list.slice(0, slicer[1] + 1);
        case 2: return num_list.slice(slicer[0]);
        case 3: return num_list.slice(slicer[0], slicer[1] + 1);
        case 4: 
            const answer = [];
            let interval = 0;
            for(let i = slicer[0]; i <= slicer[1]; i++) {
                if(interval % slicer[2] === 0) {
                    answer.push(num_list[i]);
                }
                interval++;
            }
            return answer;
    }
}