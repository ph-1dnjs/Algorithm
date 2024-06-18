function solution(my_string, index_list) {
    const str = my_string.split('');
    let result = '';
    index_list.forEach(index => (
        result += str[index]
    ));
    return result;
}