function isAnagram(s1, s2){
    return s1.split('').sort().join() === s2.split('').sort().join();
}

console.log(isAnagram('worth', 'throw'));
