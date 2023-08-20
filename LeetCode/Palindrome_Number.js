var isPalindrome = function(x) {
    let str = String(x)
    let str2 = str.split('').reverse().join('')
    if (str === str2) {
        return true
    }
    return false
};