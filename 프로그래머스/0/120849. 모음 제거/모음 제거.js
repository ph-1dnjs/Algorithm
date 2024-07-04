function solution(my_string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    vowels.forEach(vowel => {
        my_string = my_string.replaceAll(vowel, '');
    })
    return my_string;
}